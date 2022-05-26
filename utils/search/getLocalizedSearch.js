import getConfigEntry from "../config/getConfigEntry.js";
import loadSearch from "./loadSearch.js";

// Get localized search options
const getLocalizedSearch = async () => {

    // Load search options and locale
    const search = await loadSearch();
    const locale = await getConfigEntry('locale');

    // Empty array for localized search options
    let locSearch = { "searchOptions": {}};

    // Iterate through search options
    for (let i in search['searchOptions']){

        // Set query to default query
        locSearch['searchOptions'][i] = {
            "query": search['searchOptions'][i]['query']
        };

        //// Name
        // Check if the search option has:
        // 1) a field called "name-other-lang"
        // 2) a field under "name-other-lang" for the current locale
        // If so, then set the search option name to the localized name
        locSearch['searchOptions'][i]['name'] = 
        (search['searchOptions'][i].hasOwnProperty('name-other-lang') && search['searchOptions'][i]['name-other-lang'].hasOwnProperty(locale) ?
            search['searchOptions'][i]['name-other-lang'][locale]  
        :
            search['searchOptions'][i]['name']  
        )

        //// Prefix
        // Check if the search option has:
        // 1) a field called "prefix-other-lang"
        // 2) a field under "prefix-other-lang" for the current locale
        // If so, then set the search option prefix to the localized prefix
        locSearch['searchOptions'][i]['prefix'] = 
        (search['searchOptions'][i].hasOwnProperty('prefix-other-lang') && search['searchOptions'][i]['prefix-other-lang'].hasOwnProperty(locale) ?
            search['searchOptions'][i]['prefix-other-lang'][locale]  
        :
            search['searchOptions'][i]['prefix']  
        )
    }
    
    // Return localized search options
    return locSearch;

};

export default getLocalizedSearch;