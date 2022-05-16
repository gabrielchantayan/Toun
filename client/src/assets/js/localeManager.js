import * as config from './configManager'
let locale = require(`../../config/locales/${config.get('locale')}.json`)  // Require the locale file as specified by locale in config
console.log(locale)

// Gets a localized string
export function get(category, subcategory){

    // Check if localization exists
    if (checkIfLocalizationExists(category, subcategory)){
        // If so return it
        return locale[category][subcategory];
    }

    // If not return the input
    else {
        return(subcategory)
    }
}

// Check if localization exists
export function checkIfLocalizationExists(category, subcategory){
    return (locale[category].hasOwnProperty(subcategory) ? true : false);
}

// Gets the locale
export function getLocale(){
    return config.get('locale');
}