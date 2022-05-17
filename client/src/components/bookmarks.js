import * as locale from '../assets/js/localeManager.js'
import React from 'react'
import { buildBookmarks } from '../elements/bookmarks.js';
import * as bookmarks from '../assets/js/bookmarkManager.js'

export default class Bookmarks extends React.Component {

    state = {
        h3: [],
        bookmarkList: []
    }

    constructor() {
        super();
        locale.get('mainCategories', 'bookmarks').then( (res) => {
            this.setState({ h3: res })

            
        })

        bookmarks.get().then((res)=>{
            buildBookmarks(res).then( (ress) => {
                this.setState({ bookmarkList: ress })
            })
        })


    }

    render() {
        return (
         
          <section id="links">
                <h3>{this.state.h3}</h3>
                <div id="links_loop">
                    {this.state.bookmarkList}
                </div>
            </section>
          
        )
    }
}