import axios from "axios";

let host = window.location.host 

// Base API call
const baseURL = `http://${host}/api/`

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


// API get function
const get = (call) => {
    const request = axios.get(`${baseURL}${call}`);
    return request.then(response => response.data.data);
}


export { get }