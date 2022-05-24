import asyncWrapper from '../../middleware/asyncWrapper.js'
import checkLogin from '../../utils/login/checkLogin.js';

const login = asyncWrapper(async (req, res, next) => {

    const worked = checkLogin(req);

    res.status(200).json({
        success: true,
        data: worked,
    });

});

export default login;