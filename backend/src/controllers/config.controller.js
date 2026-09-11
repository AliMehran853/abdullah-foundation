import config from '../config/env.js';

export function getPaymentConfig(req, res) {
    res.json({
        success: true,
        data: {
            orgName: 'Abdullah Foundation',
            currency: config.donation.currency,
            keyId: config.razorpay.keyId,
        },
    });
}