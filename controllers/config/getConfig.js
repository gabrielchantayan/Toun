import asyncWrapper from '../../middleware/asyncWrapper.js'
import loadConfig from '../../utils/loadConfig.js'

// @desc      Get config
// @route     GET /api/config
// @access    Public
const getConfig = asyncWrapper(async (req, res, next) => {
    console.log('Accessed config')

    const config = await loadConfig();

    res.status(200).json({
        success: true,
        data: config,
    });
});

export default getConfig;