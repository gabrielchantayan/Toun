import { Icon } from '@iconify/react';
import * as themes from '../assets/js/themeManager.js'
import * as search from '../assets/js/search.js'
import * as locale from '../assets/js/localeManager.js'
import generateThemeButtons from '../elements/themeButton.js'

import React from 'react'





export default class Head extends React.Component {
    
    state = {

    }

    constructor() {
        super();

        // Generate and append Theme CSS
        themes.getCSS().then((res) => {
            const $style = document.createElement("style");
            document.head.appendChild($style);
            $style.innerHTML = res;

            
            themes.init();
        });



    }

    componentDidMount() {

        // God this is such hacky bullshit

        
    }

    renderLocale(loc){
        try {
            return this.state.locale[0][loc]
        } catch (e) {}
    }

    render(){
        return (
            <script>console.log('loaded head')</script>
        );
    }

}