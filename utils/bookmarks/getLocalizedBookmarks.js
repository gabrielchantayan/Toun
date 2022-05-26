import loadLocale from "../locale/loadLocale.js";
import loadBookmarks from "./loadBookmarks.js";

// Get localized bookmarks
const getLocalizedBookmarks = async () => {

    // Load bookmarks and locale
    const bookmarks = await loadBookmarks();
    const locale = await loadLocale();

    // Create empty array
    let locBookmarks = { "bookmarks": {}};

    // Iterate through each bookmark category
    for (let cat in bookmarks['bookmarks']){
        // Copy data from file to array
        locBookmarks['bookmarks'][cat] = bookmarks['bookmarks'][cat];

        // Test if locale has the bookmark's category
        // If so then set the category name to what is specified in the locale
        // If not then set the category name to what is specified in the file 
        let catToFind = locBookmarks['bookmarks'][cat]['category'].toLowerCase();
        locBookmarks['bookmarks'][cat]['category'] = (locale['subcategories'].hasOwnProperty(catToFind) ? locale['subcategories'][catToFind] : bookmarks['bookmarks'][cat]['category']);
    }

    return locBookmarks;

};

export default getLocalizedBookmarks;