import { Router } from 'express';
const router = Router();


import locale from '../controllers/locale/index.js';

router.get('/entry/:cat/:subcat', (req, res) => {
    return locale.getLocalizedText({"cat": req.params.cat, "subcat": req.params.subcat}, res)
});

router.get('/entry/:cat', (req, res) => {
    return locale.getLocalizedText({"cat": req.params.cat}, res)
});

router.get('/get/:locale', (req, res) => {
    return locale.getLocale({"locale": req.params.locale}, res)
});

export default router;