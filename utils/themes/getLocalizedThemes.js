import loadLocale from "../locale/loadLocale.js";
import loadThemes from "./loadThemes.js";

const getLocalizedThemes = async () => {

    const themes = await loadThemes();
    const locale = await loadLocale();

    let locThemes = { "themes": {}};

    for (let theme in themes['themes']){
        locThemes['themes'][theme] = themes['themes'][theme];
        locThemes['themes'][theme]['name'] = (locale['themes'].hasOwnProperty(theme) ? locale['themes'][theme] : themes['themes'][theme]['name']);
    }

    return locThemes;

};

export default getLocalizedThemes;