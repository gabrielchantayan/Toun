import * as api from './api.js';
import * as config from './configManager.js'

// 'color-background': colors.background,'color-text-pri': colors.primary,'color-text-acc': colors.accent
let colOptions = ['color-background', 'color-text-pri', 'color-text-acc']


// Gets a theme's name and colors
async function get(){

    let apiCall = `themes/get`

    const search = await api.get(apiCall);
    
    return search;
}

// Gets a theme's name and colors
async function getCurrentThemeSettings(){

    let apiCall = `themes/getCurrent`

    const search = await api.get(apiCall);
    
    return search;
}

// Get theme CSS
async function getCSS(){

    let apiCall = `themes/getCSS`

    const search = await api.get(apiCall);
    
    return search;
}

// Set theme values into variable
function setValue (property, value) {
    if (value) {
        document.documentElement.style.setProperty(`--${property}`, value);

        const input = document.querySelector(`#${property}`);
        if (input) {
            value = value.replace('px', '');
            input.value = value;
        }
    }
};

function setValueFromLocalStorage (property) {
    let value = localStorage.getItem(property);
    setValue(property, value);
};

// Set theme into variable for CSS
function setTheme(options) {
    for (let option of Object.keys(options)) {
        const property = option;
        const value = options[option];

        setValue(property, value);
        localStorage.setItem(property, value);
    }
}

async function init(){
    if(colOptions.every(op => localStorage.hasOwnProperty(op))){
        for (let opt in colOptions){
            setValueFromLocalStorage(colOptions[opt]);
        }
    } else {
        const theme = await getCurrentThemeSettings();
        setTheme(theme);
    }

}



export { get, getCSS, setTheme, init }