import axios from "axios";

// Base API call
const baseURL = `http://localhost:${process.env.REACT_APP_SERVER}/api/`

const get = (call) => {
    const request = axios.get(`${baseURL}${call}`);
    return request.then(response => response.data.data);
}


export { get }