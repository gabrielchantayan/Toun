import { Router } from 'express';
const router = Router();

import apps from '../controllers/apps/index.js';

router.get('/get', (req, res) => {
    return apps.get(req, res)
});

export default router;