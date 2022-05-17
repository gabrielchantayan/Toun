import asyncWrapper from '../../middleware/asyncWrapper.js'
import loadApps from '../../utils/apps/loadApps.js';

const get = asyncWrapper(async (req, res, next) => {

    const apps = await loadApps();

    res.status(200).json({
        success: true,
        data: apps,
    });

});

export default get;