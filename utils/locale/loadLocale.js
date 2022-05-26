import { readFile } from 'fs/promises';
import checkFileExists from '../files/checkFileExists.js';
import getConfigEntry from '../config/getConfigEntry.js';

// Load locale file
const loadLocale = async (reqLocale) => {

    // Check if wants default locale
    let fixedLocale = '';

    if (reqLocale === undefined || reqLocale == 'default'){
        reqLocale = await getConfigEntry('locale')
    } else {
        fixedLocale = reqLocale;
    }


    // Check if locale exists
    const localeExists = await checkFileExists(`data/locales/${reqLocale}.json`);

    let locale = (localeExists? reqLocale : 'en-US')

    const localeFile = await readFile(`data/locales/${locale}.json`, 'utf-8');
    const parsedLocale = JSON.parse(localeFile);

    return parsedLocale;
};

export default loadLocale;