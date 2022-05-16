import * as config from './configManager'                   // For getting theme
import * as locale from '../assets/js/localeManager.js'     // For localization
let themes = require(`../../config/themes.json`)            // List of themes


// Gets a theme's name and colors
export function get(theme){

    // Check if theme exists
    if (themes['themes'].hasOwnProperty(theme)){

        // Variable to shorten code
        let curTheme = themes['themes'][theme]

        // Check if localized name exists,
        // If so set themeName to localized name
        // Else set to fallback name defined in theme
        let themeName = (locale.checkIfLocalizationExists('themes', theme) ? locale.get('themes', theme) : curTheme['name'])



        return ({
            "name" : themeName,
            "background": curTheme['colors']['background'],
            "primary": curTheme['colors']['primary'],
            "accent": curTheme['colors']['accent']
        })

    }

    // If not return the input
    else {
        return({
            "name" : getLocale('errors', 'unknownTheme'),
            "background":"#ffffff",
            "primary":"#222222",
            "accent":"#dddddd"
        })
    }
}
