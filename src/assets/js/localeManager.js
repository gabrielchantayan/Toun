import * as config from './configManager'
let locale = require(`../../config/locales/${config.get('locale')}.json`)  // Require the locale file as specified by locale in config


// Gets a localized string
export function get(category, subcategory){

    // Check if localization exists
    if (locale[category].hasOwnProperty(subcategory)){
        // If so return it
        return locale[category][subcategory];
    }

    // If not return the input
    else {
        return(subcategory)
    }
}

// Gets the locale
export function getLocale(){
    return config.get('locale');
}