import * as bookmarks from '../assets/js/bookmarkManager.js'
import * as locale from '../assets/js/localeManager.js'
import React from 'react'


function Bookmark(props){
    return <a href={props['url']} class="theme_color-border theme_text-select">{props['name']}</a>
}


// Builds link list
function buildLinks(props){
    
    // Create list to store elements in
    let linkList = [];

    // Iterate through JSON
    for (const link in props){
        
        linkList.push(Bookmark(props[link]))
    }
    

    return linkList;
}

function Category(props) {
    return (
        <div id="links_item">
            <h4>{props['category']['category']}</h4>
            { buildLinks(props['category']['links']) }
        </div>
    )
}


function Bookmarks(props) {


    return (
        <div>
            {/* {buildLinks(['mk'])} */}
        </div>
    )
    
}


// Function to build apps
export async function buildBookmarks(bkList){


    // Create a list to store elements in
    let bookmarkList = [];

    // // Iterate through JSON, calling App(props)
    for (const category in bkList['bookmarks']){
        bookmarkList.push(<Category category={bkList['bookmarks'][category]}/>)
        // bookmarkList.push(<h1>d</h1>)

    }


    return bookmarkList;
}