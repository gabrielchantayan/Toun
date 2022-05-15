let config = require('../../config.json');                      // Get config
let locale = require(`../../locales/${config['locale']}.json`)  // Require the locale file as specified by locale in config

// Gets a localized string
export function get(category, subcategory){
    return locale[category][subcategory];
}

// Gets the locale
export function getLocale(){
    return config['locale'];
}