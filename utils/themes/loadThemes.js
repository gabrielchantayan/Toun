import { readFile } from 'fs/promises';

const loadThemes = async () => {

    const themes = await readFile('data/themes.json', 'utf-8');
    const parsedThemes = JSON.parse(themes);

    return parsedThemes;
};

export default loadThemes;