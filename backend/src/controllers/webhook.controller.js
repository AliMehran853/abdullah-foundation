import {
    findByOrderId,
    findByPaymentId,
    updateDonationStatus,
} from '../store/donationStore.js';
import { verifyWebhookSignature } from '../services/razorpay.service.js';
import config from '../config/env.js';

const SUPPORTED_EVENTS = new Set([
    'payment.authorized',
    'payment.captured',
    'payment.failed',
    'order.paid',
    'order.payment_captured',
]);

export async function handleRazorpayWebhook(req, res) {
    const signature = req.get('x-razorpay-signature');

    if (!signature || !req.body) {
        return res.status(400).json({ success: false, error: { message: 'Missing webhook payload.' } });
    }

    const rawBody = req.body.toString('utf8');

    const valid = verifyWebhookSignature({ rawBody, signature });

    if (!valid) {
        return res.status(400).json({ success: false, error: { message: 'Invalid webhook signature.' } });
    }

    let event;
    try {
        event = JSON.parse(rawBody);
    } catch {
        return res.status(400).json({ success: false, error: { message: 'Invalid webhook payload.' } });
    }

    if (!event.event || !SUPPORTED_EVENTS.has(event.event)) {
        return res.json({ received: true });
    }

    const payment = event.payload?.payment?.entity;
    const order = event.payload?.order?.entity;

    const orderId = payment?.order_id || order?.id;
    const paymentId = payment?.id || null;

    let status = 'FAILED';
    if (
        event.event === 'payment.authorized' ||
        event.event === 'payment.captured' ||
        event.event === 'order.paid' ||
        event.event === 'order.payment_captured'
    ) {
        status = 'PAID';
    }

    if (orderId) {
        const existing = await findByOrderId(orderId);
        if (!existing && paymentId) {
            const byPayment = await findByPaymentId(paymentId);
            if (byPayment) {
                await updateDonationStatus({
                    orderId: byPayment.orderId,
                    paymentId,
                    status,
                    event: event.event,
                });
                return res.json({ received: true });
            }
        }

        await updateDonationStatus({
            orderId,
            paymentId,
            status,
            event: event.event,
        });
    }

    return res.json({ received: true });
}