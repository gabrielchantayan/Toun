import React from 'react'
import * as searchUtil from '../assets/js/search.js'

export default function Search (){
    React.useEffect(() => {
        window.addEventListener('keydown', e => {
            searchUtil.handleKeyPress(e)
        })
    })


    return(
        <section id="search">
            <input name="keywords" type="text" id="keywords" size="50" spellcheck="false" autofocus="true"></input>
        </section>
    )
}