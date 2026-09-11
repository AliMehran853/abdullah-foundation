import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import app from '../src/app.js';
import { verifyHmac } from '../src/services/razorpay.service.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEST_DONATIONS_FILE = path.join(__dirname, '.test-donations.json');
process.env.DONATIONS_FILE = TEST_DONATIONS_FILE;

let server;
let baseUrl;

before(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
    server.close();
    await fs.rm(TEST_DONATIONS_FILE, { force: true }).catch(() => {});
});

async function postJson(url, body, headers = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: typeof body === 'string' ? body : JSON.stringify(body),
    });
    const json = await response.json().catch(() => null);
    return { status: response.status, json };
}

test('GET /api/health returns ok', async () => {
    const response = await fetch(`${baseUrl}/api/health`);
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.success, true);
    assert.equal(body.data.status, 'ok');
});

test('GET /api/config/payment returns public config', async () => {
    const response = await fetch(`${baseUrl}/api/config/payment`);
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.success, true);
    assert.equal(body.data.currency, 'INR');
    assert.equal(typeof body.data.keyId, 'string');
});

test('POST /api/payments/create-order validates input (400)', async () => {
    const { status, json } = await postJson(`${baseUrl}/api/payments/create-order`, {
        amount: 0,
        name: 'A',
        email: 'not-an-email',
        mobile: '123',
    });
    assert.equal(status, 400);
    assert.equal(json.success, false);
    const fields = json.error.details.map((d) => d.field);
    assert.ok(fields.includes('amount'));
    assert.ok(fields.includes('email'));
    assert.ok(fields.includes('mobile'));
});

test('verifyHmac accepts a valid HMAC and rejects a bad one', () => {
    const orderId = 'order_TEST123';
    const paymentId = 'pay_TEST456';
    const secret = 'test_secret_key';
    const signature = createHmac('sha256', secret)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

    assert.equal(verifyHmac(`${orderId}|${paymentId}`, signature, secret), true);
    assert.equal(
        verifyHmac(`${orderId}|${paymentId}`, 'f'.repeat(64), secret),
        false
    );
    assert.equal(verifyHmac(`${orderId}|${paymentId}`, '', secret), false);
    assert.equal(verifyHmac('payload', signature, undefined), false);
});

test('verifyHmac validates/hashes the RAW body', () => {
    const rawBody = '{"event":"payment.authorized","foo":"bar"}';
    const secret = 'webhook_secret';
    const signature = createHmac('sha256', secret).update(rawBody).digest('hex');

    assert.equal(verifyHmac(rawBody, signature, secret), true);
    assert.equal(verifyHmac(rawBody, signature.slice(2), secret), false);
});

test('POST /api/webhooks/razorpay rejects an invalid signature (400)', async () => {
    const { status } = await postJson(`${baseUrl}/api/webhooks/razorpay`, {
        event: 'payment.authorized',
    });
    assert.equal(status, 400);
});

test('POST /api/webhooks/razorpay processes a verified event', async () => {
    const payload = JSON.stringify({
        event: 'payment.authorized',
        payload: {
            payment: {
                entity: {
                    id: 'pay_TESTWEBHOOK',
                    order_id: 'order_WEBHOOK001',
                },
            },
        },
    });

    const signature = createHmac('sha256', '').update(payload).digest('hex');

    const { status, json } = await postJson(
        `${baseUrl}/api/webhooks/razorpay`,
        payload,
        { 'X-Razorpay-Signature': signature }
    );

    assert.equal(status, 200);
    assert.equal(json.received, true);
});