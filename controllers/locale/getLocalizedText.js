import asyncWrapper from '../../middleware/asyncWrapper.js'
import getLocaleEntry from '../../utils/locale/getLocaleEntry.js';

// @desc      Get config
// @route     GET /api/config
// @access    Public
const getLocalizedText = asyncWrapper(async (req, res, next) => {
    
    const text = await getLocaleEntry(req.cat, req.subcat);


    res.status(200).json({
        success: true,
        data: text,
    });
});

export default getLocalizedText;