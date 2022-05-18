import { readFile } from 'fs/promises';
import loadThemes from './loadThemes.js';

const themes = await loadThemes();

function template(name, data) {
    return (`.theme-${name}{background-color:${data['background']};color:${data['primary']}} button.theme-button.theme-${name}{background-color:${data['background']};color:${data['primary']};border:4px solid ${data['accent']};}`)
}


const generateCSS = async () => {

    let css = ""

    for (let theme in themes['themes']){
        css += template(theme, themes['themes'][theme]['colors'])
    }

    return css

};

export default generateCSS;