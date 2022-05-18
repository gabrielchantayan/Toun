import asyncWrapper from '../../middleware/asyncWrapper.js'
import getLocalizedSearch from '../../utils/search/getLocalizedSearch.js';

const get = asyncWrapper(async (req, res, next) => {

    const search = await getLocalizedSearch();

    res.status(200).json({
        success: true,
        data: search,
    });

});

export default get;