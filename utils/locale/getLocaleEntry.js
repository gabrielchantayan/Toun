import loadLocale from './loadLocale.js'

// Gets locale entry
const getLocaleEntry = async (cat, subcat) => {

    // Load locale and set return entry to blank
    const locale = await loadLocale();
    let entry = ''

    // If no subcategory specified
    if (subcat === undefined){

        // Check if locale has category,
        // If so then return the category array
        if (locale.hasOwnProperty(cat)){
            entry = locale[cat];
        } 

        // If not return the input
        else {
            entry = `${cat}`
        }
    } 
    // If a subcategory is defined
    else {
        // Check if locale has category and subcategory
        // If so return entry at that area
        if (locale.hasOwnProperty(cat) && locale[cat].hasOwnProperty(subcat)){
            entry = locale[cat][subcat];
        } 
        // If not return CAT.SUBCAT
        else {
            entry = `${cat}.${subcat}`
        }
    }

    // Return entry
    return entry;
};

export default getLocaleEntry;