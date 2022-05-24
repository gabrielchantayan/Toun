import { Router } from 'express';
const router = Router();

import login from '../controllers/login/index.js';

router.get('/login/:password', (req, res) => {
    return login.login(req.params.password, res)
});

export default router;