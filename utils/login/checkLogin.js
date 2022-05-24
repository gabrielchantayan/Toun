import 'dotenv/config' 

let setPswd = process.env.PASSWORD

function checkLogin(password){
    return (setPswd == password)
}

export default checkLogin