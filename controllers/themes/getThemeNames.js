import asyncWrapper from '../../middleware/asyncWrapper.js';
import loadThemeNames from '../../utils/themes/loadThemeNames.js';

const get = asyncWrapper(async (req, res, next) => {
    
    let themes = await loadThemeNames()

    res.status(200).json({
        success: true,
        data: themes,
    });
    
});

export default get;