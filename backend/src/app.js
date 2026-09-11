import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './config/env.js';
import paymentRoutes from './routes/payment.routes.js';
import configRoutes from './routes/config.routes.js';
import webhookRoutes from './routes/webhook.routes.js';
import { apiLimiter } from './middleware/rateLimit.middleware.js';
import { notFoundHandler, errorHandler } from './middleware/error.middleware.js';

const app = express();

app.disable('x-powered-by');

app.use(helmet());

app.use(
    cors({
        origin(configOrigin, callback) {
            if (!configOrigin || config.corsOrigins.includes(configOrigin)) {
                return callback(null, true);
            }
            return callback(new Error('Not allowed by CORS.'));
        },
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Razorpay-Signature'],
        maxAge: 600,
    })
);

// Webhook MUST receive the raw body for HMAC signature verification.
app.use('/api/webhooks/razorpay', express.raw({ type: 'application/json', limit: '1mb' }));

app.use(express.json({ limit: '100kb' }));

app.use('/api/', apiLimiter);

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        data: {
            status: 'ok',
            service: 'abdullah-foundation-backend',
            time: new Date().toISOString(),
        },
    });
});

app.use('/api/config', configRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/webhooks', webhookRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;