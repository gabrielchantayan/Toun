import asyncWrapper from '../../middleware/asyncWrapper.js';
import generateCSS from '../../utils/themes/generateCSS.js';

const getCSS = asyncWrapper(async (req, res, next) => {
    
    let css = await generateCSS();

    res.status(200).json({
        success: true,
        data: css,
    });
    
});

export default getCSS;