// Module imports
import 'dotenv/config'                                                          // DotEnv
import { copyFile, readFile, writeFile, mkdir, readdir } from 'fs/promises';    // Filesystem promises
import { readdirSync, statSync } from 'fs';                                     // For logging file tree
import * as path from 'path';
import * as url from 'url';
// Script and file imports
import checkFileExists from './files/checkFileExists.js';                       // Checking if a file exists
import processDotEnvs from './config/processDotEnvs.js';                        // For development; transfers dotenvs to client
import defaultConfig from '../defaults/config.json' assert {type: "json"};      // Load config as a JSON

// DotEnvs
const logLangCreate = process.env.LOG_INIT_LANGCREATE || false  // Log locale messgaes
const logInitConfig = process.env.LOG_INIT_CONFIG || false      // Log config messages
const logInitCreate = process.env.LOG_INIT_CREATE || false      // Log other create messages
const logFileTree   = process.env.LOG_FILE_TREE || false        // Log file tree

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('../', import.meta.url));


//// 
//// Logging
////

// Log items having to do with locale
function logLocale(text) {
    if (logLangCreate == true) console.log(text)
}

// Log items having to do with config
function logConfig(text) {
    if (logInitConfig == true) console.log(text)
}

// Log items having to do with misc. file creation
function logCreate(text) {
    if (logInitCreate == true) console.log(text)
}

// Log file tree
let files, arrayOfFiles = [];   // Initial defs
const ignoredPaths = ['node_modules', 'tools', 'git'];  // Paths to ignore in file tree
// Function
function fileTree(dirPath, arrayOfFiles){
    
    // Read files in current path
    files = readdirSync(dirPath)

    // If no files stored, set array to empty
    // If files stored, set to files stored
    arrayOfFiles = arrayOfFiles || []

    // Iterate through files
    files.forEach(function(file) {
        // Create variable for the full path
        let fullPath = dirPath + "/" + file;

        // If it's a directory, test against ignored paths
        // If directory contains ignored path, skip it
        if (statSync(fullPath).isDirectory() && !ignoredPaths.some(p => fullPath.includes(p)) ) {
            arrayOfFiles = fileTree(dirPath + "/" + file, arrayOfFiles)
        } 
        // If the file is not a directory add it to the files list
        else { 
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
        }
    })

    // Return the file list
    return arrayOfFiles
}



//// 
//// File creation
////

// Create config 
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
}

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

// Get a list of all locales and add it to the config
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

// Check if a file exists and if not then create it
async function checkFileExistsAndCreate(file) {
    // Check if file already exists
    let fileExists = false;

    // Docker is being strange so try/catch it
    try { fileExists = await checkFileExists(`data/${file}.json`); }
    catch (e) { console.log(e); fileExists = false; }

    // If not, create it
    if (!fileExists) {
        logCreate(`Creating ${file}.json...`);
        await copyFile(`defaults/${file}.json`, `data/${file}.json`);
    }
}


//// 
//// Initialization
////
async function initialize(){
    console.log("Initializing server...");

    // Log initial file tree
    if (logFileTree == true){
        console.log('\n\n\n--------------------\nInitial file tree:\n');
        process.stdout.write(fileTree('./').join('\n') + '\n')
    }

    // Feed dotenvs to client
    await processDotEnvs();

    //// 
    //// Check if folders exist
    ////

    // Check if data folder exists
    const dataFolderExists = await checkFileExists('data/');

    // If data folder exists...
    if (dataFolderExists) {
        logLocale("Found data folder")

        // Check if locales folder exists
        const localeFolderExists = await checkFileExists('data/locales/');
        // If not, then create
        (!localeFolderExists? await mkdir('data/locales') : logLocale('Found locales folder!'))

    } 
    // If not then create data and locale folder
    else {
        // Data folder
        logLocale('Creating data folder...')
        await mkdir('data').catch( (e) => { logLocale(`Failed to create data folder.\n${e}`)});

        // Locales folder
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

    // Log resulting file tree
    if (logFileTree == true){
        console.log('\n\n\n--------------------\nResulting file tree:\n');
        process.stdout.write(fileTree('./').join('\n') + '\n')
    }

}


export default initialize;