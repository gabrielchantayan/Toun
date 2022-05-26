import { readFile } from 'fs/promises';

// Load search options
const loadSearch = async () => {

    // Load and parse file
    const search = await readFile('data/searchOptions.json', 'utf-8');
    const parsedSearch = JSON.parse(search);

    // Return parsed file
    return parsedSearch;
};

export default loadSearch;