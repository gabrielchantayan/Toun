import axios from "axios";

const baseURL = 'http://localhost:3009/api/'

const get = (call) => {
    const request = axios.get(`${baseURL}${call}`);
    return request.then(response => response.data.data);
}


export { get }