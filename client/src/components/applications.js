import * as locale from '../assets/js/localeManager.js'
import React from 'react'

export default class Applications extends React.Component {

    state = {
        h3: []
    }

    constructor() {
        super();
        locale.get('mainCategories', 'applications').then( (res) => {
            this.setState({ h3: res })
        })
    }

    render() {
        return (
         
          <section id="apps">
            <h3>{this.state.h3}</h3>
            <div id="apps_loop">
              {/* {appFactory.buildApps()} */}
            </div>
          </section>
          
        )
    }
}