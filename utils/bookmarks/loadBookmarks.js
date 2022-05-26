import { readFile } from 'fs/promises';

// Load bookmarks
const loadBookmarks = async () => {

    // Read and parse bookmark file
    const bookmarks = await readFile('data/bookmarks.json', 'utf-8');
    const parsedBookmarks = JSON.parse(bookmarks);

    // Return parsed file
    return parsedBookmarks;
};

export default loadBookmarks;