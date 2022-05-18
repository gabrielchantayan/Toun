import asyncWrapper from '../../middleware/asyncWrapper.js'
import getLocalizedSearch from '../../utils/search/getLocalizedSearch.js';

const getShort = asyncWrapper(async (req, res, next) => {

    const search = await getLocalizedSearch();

    let parsedSearch = {}

    for (let item in search['searchOptions']){
        parsedSearch[search['searchOptions'][item]['prefix']] = search['searchOptions'][item]['query']
    }

    res.status(200).json({
        success: true,
        data: parsedSearch,
    });

});

export default getShort;