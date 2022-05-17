import React from 'react'
import * as searchUtil from '../assets/js/search.js'
import * as script from '../assets/js/script.js'


export default class Search extends React.Component {

    componentDidMount(){
        window.addEventListener('keydown', e => {
            searchUtil.handleKeyPress(e)
        })
    }

    state = {
        searchOptions : []
    }

    constructor() {
        super();
    }

    render() {
        return (
            <section id="search">
                <input name="keywords" type="text" id="keywords" size="50" spellcheck="false" autofocus="true"></input>
            </section>
        )
    }
}

