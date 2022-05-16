import asyncWrapper from '../../middleware/asyncWrapper.js'
import loadConfig from '../../utils/config/loadConfig.js';

// @desc      Get config
// @route     GET /api/config
// @access    Public
const getLocalizedText = asyncWrapper(async (req, res, next) => {
    
    const config = await loadConfig();
    let setLocale = config.get('locale')


    res.status(200).json({
        success: true,
        data: locale,
    });
});

export default getLocalizedText;