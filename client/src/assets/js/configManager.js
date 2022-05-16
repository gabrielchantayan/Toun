// let config = require('../../config/config.json');   // Get config
// let fs = require('fs');                             // Files
let axios = require('axios');

// Gets a value from the config
export async function get(key) {
    axios.get('http://127.0.0.1:3009/api/config').then((response) => {
        return(response['data']['data'][key])
    })
}

// Sets a value in the config
export function set(key, value){

    // Get old value for logging
    let oldValue = get(key);

    // Set the value; that's easy enough
    // config[key] = value;

    // // Write it. That's a little harder...
    // fs.writeFile('../../config/config.json', JSON.stringify(config, null, 4), function (err) {
    //     if (err) return console.log(err);
    //     console.log(`Config changed. Updated key "${key}": ${oldValue} >> ${value}`);
    // });
}