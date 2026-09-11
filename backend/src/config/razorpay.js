import Razorpay from 'razorpay';

import config from './env.js';

let cachedClient = null;

/**
 server can boot without credentials
 */
export default function getRazorpayClient() {
    if (cachedClient) {
        return cachedClient;
    }

    if (!config.razorpay.keyId || !config.razorpay.keySecret) {
        throw new Error(
            'RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET are not configured. ' +
                'Fill backend/.env (see backend/.env.example).'
        );
    }

    cachedClient = new Razorpay({
        key_id: config.razorpay.keyId,
        key_secret: config.razorpay.keySecret,
    });

    return cachedClient;
}