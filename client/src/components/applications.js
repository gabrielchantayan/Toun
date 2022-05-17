import * as locale from '../assets/js/localeManager.js'
import * as appManager from '../assets/js/appManager.js'
import * as appFactory from '../elements/appFactory.js'
import React from 'react'



export default class Applications extends React.Component {

    state = {
        h3: [],
        appList: []
    }

    constructor() {
        super();
        locale.get('mainCategories', 'applications').then( (res) => {
            this.setState({ h3: res })
        });

        appManager.get('mainCategories', 'applications').then( (res) => {
            appFactory.buildApps(res).then((res)=>{
                this.setState({ appList: res })
            })
        })
    }

    render() {
        return (
        
        <section id="apps">
            <h3>{this.state.h3}</h3>
            <div id="apps_loop">
                {this.state.appList}
            </div>
        </section>
        
        )
    }
}