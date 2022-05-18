import getConfigEntry from "../config/getConfigEntry.js";
import loadSearch from "./loadSearch.js";

const getLocalizedSearch = async () => {

    const search = await loadSearch();
    const locale = await getConfigEntry('locale');

    let locSearch = { "searchOptions": {}};

    for (let i in search['searchOptions']){
        locSearch['searchOptions'][i] = {
            "query": search['searchOptions'][i]['query']
        };

        // Name
        locSearch['searchOptions'][i]['name'] = 
        (search['searchOptions'][i].hasOwnProperty('name-other-lang') && search['searchOptions'][i]['name-other-lang'].hasOwnProperty(locale) ?
            search['searchOptions'][i]['name-other-lang'][locale]  
        :
            search['searchOptions'][i]['name']  
        )

        locSearch['searchOptions'][i]['prefix'] = 
        (search['searchOptions'][i].hasOwnProperty('prefix-other-lang') && search['searchOptions'][i]['prefix-other-lang'].hasOwnProperty(locale) ?
            search['searchOptions'][i]['prefix-other-lang'][locale]  
        :
            search['searchOptions'][i]['prefix']  
        )
    }
    
    return locSearch;

};

export default getLocalizedSearch;