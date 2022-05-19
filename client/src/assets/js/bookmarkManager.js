import * as api from './api.js';


// Gets localized bookmarks
async function get(){

    let apiCall = `bookmarks/get`

    const bookmarks = await api.get(apiCall);
    
    return bookmarks;
}

export { get }