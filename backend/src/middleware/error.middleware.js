import config from '../config/env.js';

export class ApiError extends Error {
    constructor(statusCode, message, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
    }
}

export function notFoundHandler(req, res) {
    res.status(404).json({
        success: false,
        error: { message: `Route ${req.method} ${req.originalUrl} not found.` },
    });
}

export function errorHandler(err, req, res, _next) {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal server error.';
    let details = err.details;

    if (!(err instanceof ApiError)) {
        if (err?.type === 'entity.parse.failed') {
            statusCode = 400;
            message = 'Invalid JSON payload.';
        } else if (/razorpay/i.test(err && err.name)) {
            statusCode = 502;
            message = 'Payment gateway error. Please try again later.';
        }

        if (config.isDevelopment) {
            console.error('[error]', err);
        }
    }

    if (statusCode >= 500 && config.isProduction) {
        message = 'Internal server error.';
        details = undefined;
    }

    res.status(statusCode).json({
        success: false,
        error: { message, ...(details ? { details } : {}) },
    });
}