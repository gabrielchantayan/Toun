import { Router } from 'express';
const router = Router();

// updateConfig,

import config from '../controllers/config/index.js';

router.get('/get', (req, res) => {
    return config.getConfig(req, res)
});

router.get('/get/:key', (req, res) => {
    return config.get(req.params.key, res)
});

export default router;