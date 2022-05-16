import asyncWrapper from '../../middleware/asyncWrapper.js'
import loadConfig from '../../utils/config/loadConfig.js';
import loadLocale from '../../utils/locale/loadLocale.js';

// @desc      Get config
// @route     GET /api/config
// @access    Public
const get = asyncWrapper(async (req, res, next) => {
    
    if(req['locale'] != 'default'){
        selectedLocale = req['locale'];
    } else {
        const config = await loadConfig();
        selectedLocale = config['locale']
    }

    let locale = await loadLocale(selectedLocale)

    res.status(200).json({
        success: true,
        data: locale,
    });

});

export default get;