import * as api from './api';


// Gets localized bookmarks
async function get(){

    let apiCall = `apps/get`

    const apps = await api.get(apiCall);
    
    return apps;
}

export { get }