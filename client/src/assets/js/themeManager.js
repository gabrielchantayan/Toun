import * as api from './api';


// Gets a theme's name and colors
async function get(){

    let apiCall = `themes/get`

    const search = await api.get(apiCall);
    
    return search;
}

async function getCSS(){

    let apiCall = `themes/getCSS`

    const search = await api.get(apiCall);
    
    return search;
}


export { get, getCSS }