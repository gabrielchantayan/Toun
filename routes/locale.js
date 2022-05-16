import { Router } from 'express';
const router = Router();

// updateConfig,

import locale from '../controllers/locale/index.js';

// router.get('/text/:category/:text', (req, res) => {
//     return locale.getLocalizedText({"category": req.params.category, "text": req.params.text}, res)
// });


router.get('/:locale', (req, res) => {
    return locale.getLocale({"locale": req.params.locale}, res)
});

export default router;