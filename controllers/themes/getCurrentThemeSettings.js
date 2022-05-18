import asyncWrapper from '../../middleware/asyncWrapper.js';
import getConfigEntry from '../../utils/config/getConfigEntry.js';
import loadThemes from '../../utils/themes/loadThemes.js';

// @desc      Get config
// @route     GET /api/config
// @access    Public
const getCurrentThemeSettings = asyncWrapper(async (req, res, next) => {
    
    let themes = await loadThemes();
    let theme = await getConfigEntry('theme');

    let ret = (themes['themes'].hasOwnProperty(theme) ? 
        {'color-background': themes['themes'][theme].colors.background,'color-text-pri': themes['themes'][theme].colors.primary,'color-text-acc': themes['themes'][theme].colors.accent} :
        {'color-background': '#ffffff','color-text-pri': '#AABBC3','color-text-acc': '#aeea00'}
    )

    res.status(200).json({
        success: true,
        data: ret,
    });
    
});

export default getCurrentThemeSettings;