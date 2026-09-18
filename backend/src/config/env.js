import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const requiredInProduction = [
    'RAZORPAY_KEY_ID',
    'RAZORPAY_KEY_SECRET',
    'RAZORPAY_WEBHOOK_SECRET',
];

const missing = requiredInProduction.filter(
    (key) => !process.env[key] || !String(process.env[key]).trim()
);

if (missing.length > 0) {
    const isProd = process.env.NODE_ENV === 'production';
    if (isProd) {
        throw new Error(
            `Missing required environment variables: ${missing.join(', ')}. ` +
                'Copy backend/.env.example to backend/.env and fill in your Razorpay credentials.'
        );
    }
    console.warn(
        `[env] Warning: environment variables not set (${missing.join(', ')}). ` +
            'Razorpay endpoints will fail until backend/.env is filled.'
    );
}

const toInt = (value, fallback) => {
    const parsed = Number.parseInt(value ?? '', 10);
    return Number.isFinite(parsed) ? parsed : fallback;
};

const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV !== 'production',

    port: toInt(process.env.PORT, 5000),

    razorpay: {
        keyId: String(process.env.RAZORPAY_KEY_ID || '').trim(),
        keySecret: String(process.env.RAZORPAY_KEY_SECRET || '').trim(),
        webhookSecret: String(process.env.RAZORPAY_WEBHOOK_SECRET || '').trim(),
    },

    corsOrigins: (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean),

    donation: {
        currency: 'INR',
    },
};

export default config;