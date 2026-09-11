import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DATA_DIR = path.resolve(__dirname, '../../data');
const DATA_FILE =
    process.env.DONATIONS_FILE || path.join(DATA_DIR, 'donations.json');

/**
 * Minimal JSON-file persistence for donation records.
 * Replace with a real database later without changing the API surface.
 */

let writeQueue = Promise.resolve();

function withLock(operation) {
    const result = writeQueue.then(operation, operation);
    writeQueue = result.catch(() => {});
    return result;
}

async function ensureFile() {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
        await fs.access(DATA_FILE);
    } catch {
        await fs.writeFile(DATA_FILE, '[]', 'utf-8');
    }
}

async function readAll() {
    await ensureFile();
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

async function writeAll(records) {
    await ensureFile();
    await fs.writeFile(DATA_FILE, JSON.stringify(records, null, 4), 'utf-8');
}

export async function createDonationRecord(data) {
    return withLock(async () => {
        const records = await readAll();
        const record = {
            id: randomUUID(),
            orderId: data.orderId,
            amount: data.amount,
            currency: data.currency,
            donorName: data.donorName,
            donorEmail: data.donorEmail,
            donorMobile: data.donorMobile,
            pan: data.pan || null,
            receipt: data.receipt,
            status: data.status || 'CREATED',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        records.push(record);
        await writeAll(records);
        return record;
    });
}

export async function findByOrderId(orderId) {
    const records = await readAll();
    return records.find((record) => record.orderId === orderId) || null;
}

export async function findByPaymentId(paymentId) {
    const records = await readAll();
    return records.find((record) => record.paymentId === paymentId) || null;
}

export async function updateDonationStatus({ orderId, paymentId, status, event }) {
    return withLock(async () => {
        const records = await readAll();
        const record = records.find((entry) => entry.orderId === orderId);

        if (!record) {
            const fallback = {
                id: randomUUID(),
                orderId,
                amount: null,
                currency: 'INR',
                donorName: null,
                donorEmail: null,
                donorMobile: null,
                pan: null,
                receipt: null,
                status,
                paymentId: paymentId || null,
                event: event || null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            records.push(fallback);
            await writeAll(records);
            return fallback;
        }

        record.status = status;
        record.paymentId = paymentId || record.paymentId;
        record.event = event || record.event;
        record.updatedAt = new Date().toISOString();

        await writeAll(records);
        return record;
    });
}

export async function getAllDonations() {
    return readAll();
}