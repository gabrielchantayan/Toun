import { readFile } from 'fs/promises';
import loadLocale from '../locale/loadLocale.js';
import loadThemes from './loadThemes.js';

const loadThemeNames = async () => {

    // Get themes and locale files
    const themeFile = await loadThemes();
    const locale = await loadLocale();

    // Create empty array
    let themes = {}

    // Iterate through theme file
    for (let theme in themeFile['themes']){
        // Check if there exists a localized theme name
        // If there is, use that
        // Format:
        // themes = { THEME_ID : THEME_NAME }
        themes[theme] = (locale['themes'].hasOwnProperty(theme) ? locale['themes'][theme] : themeFile['themes'][theme]['name']);
    }

    // Return array
    return themes;
};

export default loadThemeNames;