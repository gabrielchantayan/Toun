import { readFile } from 'fs/promises';

const loadSearch = async () => {

    const search = await readFile('data/searchOptions.json', 'utf-8');
    const parsedSearch = JSON.parse(search);

    return parsedSearch;
};

export default loadSearch;