import 'dotenv/config'  // Import DotEnvs

// If it exists, set the password to the dotenv password
// If not then set it to "password"
let setPswd = process.env.PASSWORD || "password"

// Super explanatory
function checkLogin(password){
    return (setPswd == password)
}

export default checkLogin