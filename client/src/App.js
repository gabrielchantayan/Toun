// import logo from './logo.svg';
// import './App.css';
// import * as script from './assets/js/script.js'
import * as locale from './assets/js/localeManager.js'
// import * as appFactory from './assets/elements/appFactory.js'
// import * as bookmarkFactory from './assets/elements/bookmarks.js'
// import * as config from './assets/js/configManager.js'
import { Icon } from '@iconify/react';
import Applications from './components/applications.js';
import Bookmarks from './components/bookmarks.js';
import Header from './components/header.js';
import Axios from "axios";
import React from 'react'

// function Header(props){
//     return (
//         <section id="header">
//         <h2 id="header_date">{script.date()}</h2>
//         <h1 id="header_greet">{script.greet()}</h1>
//         </section>
//     );
// }




function App() {
    return (
    <div>
        <main id="container" class="fade">

            <section id="search">
                <input name="keywords" type="text" id="keywords" size="50" spellcheck="false" autofocus="true" onkeydown="handleKeyPress(event)"></input>
            </section>

            <Header />

            <Applications />

            <Bookmarks />


        </main>

        <div id="modal_init">
            <a class="btn" href="#modal">
            <Icon className="icon" icon="mdi-xbox-controller-menu"/>
            </a>
        </div>
    </div>


    );
}

export default App;
