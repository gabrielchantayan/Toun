import * as locale from '../assets/js/localeManager.js'
import React from 'react'

export default class Bookmarks extends React.Component {

    state = {
        h3: []
    }

    constructor() {
        super();
        locale.get('mainCategories', 'bookmarks').then( (res) => {
            this.setState({ h3: res })
        })
    }

    render() {
        return (
         
          <section id="links">
                <h3>{this.state.h3}</h3>
                <div id="links_loop">
                    {/* {bookmarkFactory.buildBookmarks()} */}
                </div>
            </section>
          
        )
    }
}