import axios from "axios";

let port = process.env.REACT_APP_SERVER || window.location.port

// Base API call
const baseURL = `http://localhost:${port}/api/`

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


// API get function
const get = (call) => {
    const request = axios.get(`${baseURL}${call}`);
    return request.then(response => response.data.data);
}


export { get }