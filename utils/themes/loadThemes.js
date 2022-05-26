import { readFile } from 'fs/promises';

const loadThemes = async () => {
    let themes = {}
    // Get themes file and parse
    try {
        themes = await readFile('data/themes.json', 'utf-8');
    } catch (e) {
        themes = await readFile('defaults/themes.json', 'utf-8');
    }
    const parsedThemes = JSON.parse(themes);

    // Return parsed file
    return parsedThemes;
};

export default loadThemes;