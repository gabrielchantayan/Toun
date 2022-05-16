import { readFile } from 'fs/promises';
import loadLocale from '../locale/loadLocale.js';
import loadThemes from './loadThemes.js';

const loadThemeNames = async () => {

    const themeFile = await loadThemes();
    const locale = await loadLocale();

    let themes = {}

    for (let theme in themeFile['themes']){
        themes[theme] = (locale['themes'].hasOwnProperty(theme) ? locale['themes'][theme] : themeFile['themes'][theme]['name']);
    }

    return themes;
};

export default loadThemeNames;