import { Router } from 'express';
const router = Router();

// updateConfig,

import getConfig from '../controllers/config/index.js';

router.get('/', (req, res) => {
    return getConfig.getConfig(req, res)
});

export default router;