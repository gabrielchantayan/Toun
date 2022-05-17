import { readFile } from 'fs/promises';

const loadBookmarks = async () => {

    const bookmarks = await readFile('data/bookmarks.json', 'utf-8');
    const parsedBookmarks = JSON.parse(bookmarks);

    return parsedBookmarks;
};

export default loadBookmarks;