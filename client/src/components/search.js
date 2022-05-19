import React from 'react'
import * as searchUtil from '../assets/js/search.js'
import * as script from '../assets/js/script.js'


export default class Search extends React.Component {

    componentDidMount(){
        window.addEventListener('keydown', e => {
            searchUtil.handleKeyPress(e, this.state.searchOptions)
        })
    }

    state = {
        searchOptions : []
    }

    constructor() {
        super();

        searchUtil.getShort().then((res) => {
            this.setState({ searchOptions: res })
        });

    }

    render() {
        return (
            <section id="search">
                <input name="keywords" type="text" id="keywords" size="50" spellCheck="false" autoFocus={true}></input>
            </section>
        )
    }
}

