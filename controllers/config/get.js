import asyncWrapper from '../../middleware/asyncWrapper.js'
import getConfigEntry from '../../utils/config/getConfigEntry.js'


const get = asyncWrapper(async (req, res, next) => {

    const val = await getConfigEntry(req);

    res.status(200).json({
        success: true,
        data: val,
    });

});

export default get;