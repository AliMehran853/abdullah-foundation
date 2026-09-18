import { body } from 'express-validator';

import config from '../config/env.js';
import { validate } from '../middleware/validate.middleware.js';
import { createOrderLimiter, verifyLimiter } from '../middleware/rateLimit.middleware.js';
import { createRazorpayOrder, verifyPaymentSignature } from '../services/razorpay.service.js';
import { createDonationRecord, findByOrderId, updateDonationStatus } from '../store/donationStore.js';
import { ApiError } from '../middleware/error.middleware.js';

const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

export async function createOrder(req, res) {
    const { amount, name, email, mobile, pan } = req.body;

    const amountPaise = amount * 100;
    const receipt = `don-${Date.now()}`;
    const notes = {
        donor_name: name,
        donor_email: email,
        donor_mobile: mobile,
        purpose: 'General Donation',
    };

    const order = await createRazorpayOrder({
        amount: amountPaise,
        receipt,
        notes,
    });

    await createDonationRecord({
        orderId: order.id,
        amount,
        currency: order.currency || config.donation.currency,
        donorName: name,
        donorEmail: email,
        donorMobile: mobile,
        pan: pan || null,
        receipt,
        status: 'CREATED',
    });

    res.status(201).json({
        success: true,
        data: {
            orderId: order.id,
            amount,
            amountPaise,
            currency: order.currency || config.donation.currency,
            keyId: config.razorpay.keyId,
            receipt: order.receipt,
        },
    });
}

export async function verifyPayment(req, res) {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const record = await findByOrderId(razorpay_order_id);
    if (!record) {
        throw new ApiError(404, 'Order not found. Please start a new donation.');
    }

    const valid = verifyPaymentSignature({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
    });

    if (!valid) {
        throw new ApiError(400, 'Payment verification failed. Please contact the foundation.');
    }

    await updateDonationStatus({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        status: 'PAID',
        event: 'checkout.verified',
    });

    res.json({
        success: true,
        data: {
            message: 'Donation confirmed. Thank you for your support!',
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
        },
    });
}

export const createOrderValidation = validate([
    body('amount')
        .exists({ values: 'falsy' })
        .withMessage('Amount is required.')
        .isInt({ min: 1 })
        .withMessage('Amount must be a positive whole number.')
        .toInt(),

    body('name')
        .trim()
        .isLength({ min: 2, max: 80 })
        .withMessage('Name must be between 2 and 80 characters.'),

    body('email')
        .trim()
        .isEmail()
        .withMessage('A valid email address is required.')
        .normalizeEmail({ gmail_remove_dots: false }),

    body('mobile')
        .trim()
        .matches(/^[6-9]\d{9}$/)
        .withMessage('Enter a valid 10-digit Indian mobile number.'),

    body('pan')
        .optional({ values: 'falsy' })
        .trim()
        .toUpperCase()
        .matches(PAN_REGEX)
        .withMessage('PAN must be a valid 10-character PAN (e.g. ABCDE1234F).'),
]);

export const verifyPaymentValidation = validate([
    body('razorpay_payment_id')
        .trim()
        .isLength({ min: 6, max: 64 })
        .withMessage('razorpay_payment_id is invalid.'),
    body('razorpay_order_id')
        .trim()
        .isLength({ min: 6, max: 64 })
        .withMessage('razorpay_order_id is invalid.'),
    body('razorpay_signature')
        .trim()
        .matches(/^[a-f0-9]{64}$/i)
        .withMessage('razorpay_signature is invalid.'),
]);

export const createOrderRoute = [createOrderLimiter, createOrderValidation, createOrder];
export const verifyPaymentRoute = [verifyLimiter, verifyPaymentValidation, verifyPayment];