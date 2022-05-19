////
//// INIT STUFFS
////
import * as api from './api.js';   // Import API

// Get locale file
async function getAndStoreLocaleFile(){
    
    // Check local storage
    // If a locale is saved, return the locale
    // If not use default locale
    let localeToGet = (localStorage.hasOwnProperty('locale') ? localStorage.getItem('locale') : 'default')

    // Get locale from api
    const file = await api.get(`locale/get/${localeToGet}`);
    
    // Return
    return file;
}

// No top-level awaits ;(
const savedLocale = getAndStoreLocaleFile();


////
//// FUNCTIONS
////

// Gets a localized string
export async function get(cat, subcat){

    // Grab saved locale
    let locale = await savedLocale;
    
    // If there is no subcategory, return the category
    // If there is a subcategory, return subcategory
    return ( subcat === undefined ? locale[cat] : locale[cat][subcat]);
}


// Gets the locale
export async function getLocale(){

    // API Call to config
    const defaultLocale = await api.get('config/get/locale');

    // Return
    return defaultLocale;
}