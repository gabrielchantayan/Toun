import checkFileExists from './files/checkFileExists.js';
import { copyFile, readFile, writeFile, mkdir, readdir } from 'fs/promises';
import defaultConfig from '../defaults/config.json' assert {type: "json"};
import 'dotenv/config' 

const logLangCreate = process.env.LOG_INIT_LANGCREATE   // Log locale messgaes
const logInitConfig = process.env.LOG_INIT_CONFIG       // Log config messages
const logInitCreate = process.env.LOG_INIT_CREATE       // Log other create messages

// Logging
function logLocale(text) {
    if (logLangCreate == true) console.log(text)
}

function logConfig(text) {
    if (logInitConfig == true) console.log(text)
}

function logCreate(text) {
    if (logInitCreate == true) console.log(text)
}

// Create config function
async function createConfig() {

    // Check if a config already exists
    await checkFileExistsAndCreate('config');

    // Read both configs
    const existingConfig = await readFile('data/config.json', 'utf-8');
    const parsedConfig = JSON.parse(existingConfig);

    // Add new config pairs if necessary
    for (let key in defaultConfig) {
        if (!Object.keys(parsedConfig).includes(key)) {
            logConfig(`Existing config doesn't contain key "${key}". Creating with default value: ${defaultConfig[key]}`);
            parsedConfig[key] = defaultConfig[key];
        }
    }

    // Add list of locales to config
    const locales = await updateConfigWithLocales();
    parsedConfig['availible-locales'] = locales

    // Save file
    await writeFile('data/config.json', JSON.stringify(parsedConfig), null, 4);
};

// Create locale files
async function createLocales() {
    // Get all locales
    const defaultLocaleContents = await readdir('defaults/locales');

    // Iterate through
    for (let defaultLocale in defaultLocaleContents) {

        // Check if locale exists in data folder
        const dataLocaleExists = await checkFileExists(`data/locales/${defaultLocaleContents[defaultLocale]}`);
        
        // If so check version numbers
        if (dataLocaleExists){

            // Compare locale versions
            // If the version in default/ is greater than the one in data/, overwrite the version in data/
            let daLCL, dfLCL = {};

            await readFile(`defaults/locales/${defaultLocaleContents[defaultLocale]}`).then( (data) => { dfLCL = JSON.parse(data) });
            await readFile(`data/locales/${defaultLocaleContents[defaultLocale]}`).then( (data) => { daLCL = JSON.parse(data) });

            logLocale(`Locale ${defaultLocaleContents[defaultLocale]} (v${daLCL['info']['version']}) already exists!`)

            if (daLCL['info']['version'] >= dfLCL['info']['version']){
            } else {
                logLocale(`Default version greater; overwriting data version (${dfLCL['info']['version']}>${daLCL['info']['version']})`)
                await copyFile(`defaults/locales/${defaultLocaleContents[defaultLocale]}`, `data/locales/${defaultLocaleContents[defaultLocale]}`);
            }

        } 
        
        // Else; transfer
        else { 
            logLocale(`Copying ${defaultLocaleContents[defaultLocale]}...`)
            await copyFile(`defaults/locales/${defaultLocaleContents[defaultLocale]}`, `data/locales/${defaultLocaleContents[defaultLocale]}`);
        }

    }
}

// Pretty much just that
async function updateConfigWithLocales() {
    // Get all locales
    const locales = await readdir('data/locales');

    // Create empty list of locales
    let localeList = {}

    // Iterate through
    for (let locale in locales) {

        let localeData = {}

        await readFile(`data/locales/${locales[locale]}`).then( (data) => { localeData = JSON.parse(data) });

        localeList[locales[locale].split('.')[0]] = {
            "language": localeData['info']['language'],
        }

    }

    return localeList;

}


async function checkFileExistsAndCreate(file) {
    // Check if file already exists
    const fileExists = await checkFileExists(`data/${file}.json`);

    // If not, create it
    if (!fileExists) {
        logCreate(`Creating ${file}.json...`);
        await copyFile(`defaults/${file}.json`, `data/${file}.json`);
    }
}



async function initialize(){
    console.log("Initializing server...");

    //// 
    //// Check if folders exist
    ////

    // Check if data folder exists
    const dataFolderExists = await checkFileExists('data/');

    if (dataFolderExists) {
        logLocale("Found data folder")

        // Check if locales folder exists
        const localeFolderExists = await checkFileExists('data/locales/');
        (!localeFolderExists? await mkdir('data/locales') : logLocale('Found locales folder!'))

    } else {

        // If not then create data and locale folder
        logLocale('Creating data folder...')
        await mkdir('data').catch( (e) => { logLocale(`Failed to create data folder.\n${e}`)});

        logLocale('Creating locales folder...')
        await mkdir('data/locales').catch( (e) => { logLocale(`Failed to create locales folder.\n${e}`)});;
    }

    //// 
    //// Update and copy files
    ////
    
    await createConfig();
    await createLocales();
    await checkFileExistsAndCreate('themes');
    await checkFileExistsAndCreate('apps');
    await checkFileExistsAndCreate('bookmarks');
    await checkFileExistsAndCreate('searchOptions');

}


export default initialize;