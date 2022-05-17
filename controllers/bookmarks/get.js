import asyncWrapper from '../../middleware/asyncWrapper.js'
import getLocalizedBookmarks from '../../utils/bookmarks/getLocalizedBookmarks.js';

const get = asyncWrapper(async (req, res, next) => {

    const bookmarks = await getLocalizedBookmarks();

    res.status(200).json({
        success: true,
        data: bookmarks,
    });

});

export default get;