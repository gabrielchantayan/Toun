import loadLocale from "../locale/loadLocale.js";
import loadThemes from "./loadThemes.js";

// Get the themes file with localized names
const getLocalizedThemes = async () => {

    // Load themes and locale files
    const themes = await loadThemes();
    const locale = await loadLocale();

    // Create empty array
    let locThemes = { "themes": {}};

    // Iterate through themes
    for (let theme in themes['themes']){
        // Copy over the theme data
        locThemes['themes'][theme] = themes['themes'][theme];

        // Check if locale has data for the theme name,
        // If so then replace the default theme name with the localized theme name
        locThemes['themes'][theme]['name'] = (locale['themes'].hasOwnProperty(theme) ? locale['themes'][theme] : themes['themes'][theme]['name']);
    }

    // Return localized themes
    return locThemes;

};

export default getLocalizedThemes;