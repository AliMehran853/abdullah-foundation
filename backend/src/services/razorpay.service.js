import { createHmac, timingSafeEqual } from 'node:crypto';

import config from '../config/env.js';
import getRazorpayClient from '../config/razorpay.js';

function hmacDigest(payload, secret) {
    return createHmac('sha256', secret).update(payload).digest('hex');
}

function safeEqual(a, b) {
    const bufA = Buffer.from(String(a), 'utf-8');
    const bufB = Buffer.from(String(b), 'utf-8');
    if (bufA.length !== bufB.length) {
        return false;
    }
    return timingSafeEqual(bufA, bufB);
}

/**
 * Create a Razorpay Order. Amount is expected in paise (INR smallest unit).
 */
export async function createRazorpayOrder({ amount, receipt, notes }) {
    const razorpay = getRazorpayClient();

    const order = await razorpay.orders.create({
        amount,
        currency: config.donation.currency,
        receipt,
        notes,
    });

    return order;
}

/**
 * Pure HMAC-SHA256 verifier. Returns a boolean (never throws).
 */
export function verifyHmac(payload, signature, secret) {
    if (!payload || !signature || secret === undefined) {
        return false;
    }
    const expected = hmacDigest(payload, secret);
    return safeEqual(expected, signature);
}

/**
 * Verify the Razorpay Checkout signature:
 *   signature = HMAC_SHA256( order_id | payment_id , key_secret )
 */
export function verifyPaymentSignature({ orderId, paymentId, signature }) {
    return verifyHmac(`${orderId}|${paymentId}`, signature, config.razorpay.keySecret);
}

/**
 * Verify a Razorpay webhook signature computed over the RAW request body:
 *   signature = HMAC_SHA256( rawBodyString , webhook_secret )
 */
export function verifyWebhookSignature({ rawBody, signature }) {
    return verifyHmac(rawBody, signature, config.razorpay.webhookSecret);
}