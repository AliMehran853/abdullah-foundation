import { Router } from 'express';

import { getPaymentConfig } from '../controllers/config.controller.js';

const router = Router();

router.get('/payment', getPaymentConfig);

export default router;