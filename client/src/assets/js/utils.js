import Axios from "axios";

export async function api(call){
    Axios({
        method: "GET",
        url: `http://localhost:3009/api/`,
        headers: {
        "Content-Type": "application/json"
    }
    }).then(res => {
        return(res.data)
    });
}
