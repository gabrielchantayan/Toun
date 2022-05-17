import * as script from '../assets/js/script.js'

import React from 'react'

export default class Header extends React.Component {

    state = {
        date: '',
        greet: ''
    }

    constructor() {
        super();

        script.date().then((res) => {
            this.setState({ date: res })
        });

        script.greet().then((res) => {
            this.setState({ greet: res })
        });

    }



    render() {
        return (
            <section id="header">
                <h2 id="header_date">{this.state.date}</h2>
                <h1 id="header_greet">{this.state.greet}</h1>
            </section>
        )
    }
}