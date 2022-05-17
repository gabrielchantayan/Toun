import * as locale from '../assets/js/localeManager.js'
let bookmarks = require('../config/bookmarks.json')

// Normalizes category name
function normalizeCategoryName(name) {
    // Copied from StackOverflow
    return name.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function Bookmark(props){
    return <a href={'"' + props['url'] + '"'} class="theme_color-border theme_text-select">{props['name']}</a>
}


// Builds link list
function buildLinks(props){
    
    // console.log(props)

    // Create list to store elements in
    let linkList = [];

    // Iterate through JSON
    for (const link in props){
        
        linkList.push(Bookmark(props[link]))
    }
    

    return linkList;
}


function Category(props){
    return (
        <div id="links_item">
            <h4>{locale.get('subcategories', normalizeCategoryName(props['category']['category']))}</h4>

            {buildLinks(props['category']['links'])}

        </div>
    );
}

// Function to build apps
export function buildBookmarks(){

    // Create a list to store elements in
    let bookmarkList = [];

    // Iterate through JSON, calling App(props)
    for (const category in bookmarks['bookmarks']){
        bookmarkList.push(<Category category={bookmarks['bookmarks'][category]}/>)
    }

    return bookmarkList;
}