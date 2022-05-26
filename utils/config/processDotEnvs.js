import { writeFile } from 'fs/promises';
import 'dotenv/config' 

// dotenvs to pass along
// Ones react gets is prefixed with REACT_APP_SERVER
let denv = 
`PORT = ${process.env.CLIENT_PORT}
REACT_APP_SERVER = ${process.env.SERVER_PORT}`





// Write file in client
export default async function processDotEnvs(){

    // Check if in a development setting
    if (process.env.NODE_ENV == 'development'){

        // Write the .env file from the denv variable
        try { 
            await writeFile('client/.env', denv); 
        }
        catch (e) {console.log(e)}

    }


}