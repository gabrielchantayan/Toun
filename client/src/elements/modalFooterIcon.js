import { Icon } from '@iconify/react';
import * as themes from '../assets/js/themeManager.js'
import * as search from '../assets/js/search.js'
import * as locale from '../assets/js/localeManager.js'
import generateThemeButtons from '../elements/themeButton.js'
import LanguageSelector from '../elements/langSelectButton.tsx'

import React, { Component } from 'react'


export default class ModalFooterIcon extends React.Component {
    
    state = {
        locale: []
    }

    constructor() {
        super();

        locale.get('options').then((res) => {
            this.setState(prevState => ({
                locale: [...prevState.locale, res]
            }))
        });
        
    }

    componentDidMount() {

        // God this is such hacky bullshit

        
    }

    text(){
        if(this.props.hasOwnElement('locale')) return this.renderLocale(this.props.locale)
        if(this.props.hasOwnElement('text')) return this.props.text
    }


    renderLocale(loc){
        try {
            return this.state.locale[0][loc]
        } catch (e) { return(loc) }
    }

    processClick(){
        if(this.props.hasOwnElement('website')) window.redirect(this.props.website)
        if(this.props.hasOwnElement('tab')) return this.props.tab
    }

    render(){
        return (
            <span class="iconGroup" onCLick={this.processClick}>                        
                <Icon className = "icon" icon={this.props.icon} /> {this.text}
            </span>
        );
    }

}