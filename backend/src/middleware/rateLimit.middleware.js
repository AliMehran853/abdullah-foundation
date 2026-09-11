import rateLimit from 'express-rate-limit';

const standardHeaders = true;
const legacyHeaders = false;

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 120,
    standardHeaders,
    legacyHeaders,
    message: {
        success: false,
        error: { message: 'Too many requests. Please try again later.' },
    },
});

export const createOrderLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders,
    legacyHeaders,
    message: {
        success: false,
        error: { message: 'Too many donation attempts. Please try again later.' },
    },
});

export const verifyLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 60,
    standardHeaders,
    legacyHeaders,
    message: {
        success: false,
        error: { message: 'Too many verification attempts. Please try again later.' },
    },
});