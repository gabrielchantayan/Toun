import { Router } from 'express';
const router = Router();

import search from '../controllers/search/index.js';

router.get('/get', (req, res) => {
    return search.get(req, res)
});

router.get('/get/short', (req, res) => {
    return search.getShort(req, res)
});

export default router;