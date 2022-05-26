import { writeFile } from 'fs/promises';
import 'dotenv/config' 


let denv = 
`PORT = ${process.env.CLIENT_PORT}
REACT_APP_SERVER = ${process.env.SERVER_PORT}`

export default async function processDotEnvs(){
    // await writeFile('client/.env', denv);
}