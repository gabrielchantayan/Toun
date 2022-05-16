import { Router } from 'express';
const router = Router();

import theme from '../controllers/themes/index.js';

router.get('/names', (req, res) => {
    return theme.getThemeNames(req, res)
});

router.get('/getCSS', (req, res) => {
    return theme.getCSS(req, res)
});


export default router;