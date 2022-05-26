import { readFile } from 'fs/promises';
import loadThemes from './loadThemes.js';

const themes = await loadThemes();

// Theme template
/*
.theme-$NAME {
    background-color:   $DATA.BKG_COLOR;
    color:              $DATA.PRIMARY_COLOR;
}
button.theme-button.theme-$NAME {
    background-color:   $DATA_BKG_COLOR;
    color:              $DATA.PRIMARY_COLOR;
    border: 4px solid   $DATA.ACCENT_COLOR;
}
*/
function template(name, data) {
    return (`.theme-${name}{background-color:${data['background']};color:${data['primary']}} button.theme-button.theme-${name}{background-color:${data['background']};color:${data['primary']};border:4px solid ${data['accent']};}`)
}

// Genetate CSS function
const generateCSS = async () => {

    // Initialize CSS as empty string
    let css = ""

    // Iterate through themes
    for (let theme in themes['themes']){
        // Add templated theme to CSS
        css += template(theme, themes['themes'][theme]['colors'])
    }

    // Return CSS
    return css

};

export default generateCSS;