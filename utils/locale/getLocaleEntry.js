import { readFile } from 'fs/promises';



const getLocaleEntry = async (reqLocale) => {
    // Check if locale exists
    const localeExists = await checkFileExists(`data/locales/${reqLocale}.json`);

    let locale = (localeExists? reqLocale : 'en_US')

    const localeFile = await readFile(`data/locales/${locale}.json`, 'utf-8');
    const parsedLocale = JSON.parse(localeFile);

    return parsedLocale;
};

export default getLocaleEntry;