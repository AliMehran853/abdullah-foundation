import config from './config/env.js';
import app from './app.js';

const server = app.listen(config.port, () => {
    console.log(`[server] Abdullah Foundation backend running on http://localhost:${config.port}`);
    console.log(`[server] Environment: ${config.nodeEnv}`);
    console.log(
        `[server] Razorpay ${config.razorpay.keyId ? 'configured' : 'NOT configured'} ` +
            '(see backend/.env.example)'
    );
});

async function shutdown(signal) {
    console.log(`[server] ${signal} received, shutting down...`);
    server.close(() => {
        process.exit(0);
    });
    setTimeout(() => process.exit(1), 10_000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('unhandledRejection', (reason) => {
    console.error('[server] Unhandled rejection:', reason);
});
process.on('uncaughtException', (error) => {
    console.error('[server] Uncaught exception:', error);
    shutdown('uncaughtException');
});