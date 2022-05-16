import asyncWrapper from '../../middleware/asyncWrapper.js';
import getLocalizedThemes from '../../utils/themes/getLocalizedThemes.js';

// @desc      Get config
// @route     GET /api/config
// @access    Public
const get = asyncWrapper(async (req, res, next) => {
    
    let themes = await getLocalizedThemes();

    res.status(200).json({
        success: true,
        data: themes,
    });

});

export default get;