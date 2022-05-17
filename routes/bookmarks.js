import { Router } from 'express';
const router = Router();

import bookmarks from '../controllers/bookmarks/index.js';

router.get('/get', (req, res) => {
    return bookmarks.get(req, res)
});

export default router;