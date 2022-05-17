import asyncWrapper from '../../middleware/asyncWrapper.js'
import loadSearch from '../../utils/search/loadSearch.js';

const get = asyncWrapper(async (req, res, next) => {

    const search = await loadSearch();

    res.status(200).json({
        success: true,
        data: search,
    });

});

export default get;