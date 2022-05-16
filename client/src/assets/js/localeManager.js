import * as config from './configManager';
import * as utils from './utils';


// let locale = require(`../../config/locales/${config.get('locale')}.json`)  // Require the locale file as specified by locale in config
// console.log(locale)

// Gets a localized string
export async function get(category, subcategory){
    const locale = await getLocale();

    return('')
}

// Check if localization exists
export function checkIfLocalizationExists(category, subcategory){
    return (locale[category].hasOwnProperty(subcategory) ? true : false);
}

// Gets the locale
export async function getLocale(){
    const locale = await utils.api('locale/get/default');

    return locale;
}