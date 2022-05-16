import loadLocale from './loadLocale.js'


const getLocaleEntry = async (cat, subcat) => {
    const locale = await loadLocale();
    let entry = ''

    if (subcat === undefined){
        if (locale.hasOwnProperty(cat)){
            entry = locale[cat];
        } else {
            entry = `${cat}`
        }
    } else {
        if (locale.hasOwnProperty(cat) && locale[cat].hasOwnProperty(subcat)){
            entry = locale[cat][subcat];
        } else {
            entry = `${cat}.${subcat}`
        }
    }


    

    return entry;
};

export default getLocaleEntry;