import axios from "axios";

// Base API call
const baseURL = 'http://localhost:3009/api/'

console.log(process.env.SERVER_PORT)

const get = (call) => {
    const request = axios.get(`${baseURL}${call}`);
    return request.then(response => response.data.data);
}


export { get }