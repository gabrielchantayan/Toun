// import * as config from './configManager';
import * as api from './api';


// let locale = require(`../../config/locales/${config.get('locale')}.json`)  // Require the locale file as specified by locale in config
// console.log(locale)

// Gets a localized string
export async function get(cat, subcat){

    let apiCall = `locale/entry/${cat}/${( subcat === undefined ? '' : subcat) }`

    const locale = await api.get(apiCall);
    
    return locale;
}

// Check if localization exists
export function checkIfLocalizationExists(category, subcategory){
    // return (locale[category].hasOwnProperty(subcategory) ? true : false);
}

// Gets the locale
export async function getLocale(){
    const locale = await api.get('config/get/locale');
    return locale;
}