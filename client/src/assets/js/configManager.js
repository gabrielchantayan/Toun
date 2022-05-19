import * as api from './api';


// Gets localized bookmarks
async function get(key){

    let apiCall = `config/get/${key}`

    const res = await api.get(apiCall);
    
    return res;
}

export { get }