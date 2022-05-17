import loadLocale from "../locale/loadLocale.js";
import loadBookmarks from "./loadBookmarks.js";

const getLocalizedBookmarks = async () => {

    const bookmarks = await loadBookmarks();
    const locale = await loadLocale();

    let locBookmarks = { "bookmarks": {}};

    for (let cat in bookmarks['bookmarks']){
        locBookmarks['bookmarks'][cat] = bookmarks['bookmarks'][cat];
        let catToFind = locBookmarks['bookmarks'][cat]['category'].toLowerCase();
        locBookmarks['bookmarks'][cat]['category'] = (locale['subcategories'].hasOwnProperty(catToFind) ? locale['subcategories'][catToFind] : bookmarks['bookmarks'][cat]['category']);
    }

    return locBookmarks;

};

export default getLocalizedBookmarks;