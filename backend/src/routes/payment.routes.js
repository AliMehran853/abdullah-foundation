import { Router } from 'express';

import {
    createOrderRoute,
    verifyPaymentRoute,
} from '../controllers/payment.controller.js';

const router = Router();

router.post('/create-order', ...createOrderRoute);
router.post('/verify', ...verifyPaymentRoute);

export default router;