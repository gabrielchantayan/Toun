import { Icon } from '@iconify/react';
import * as themes from '../assets/js/themeManager.js'
import * as search from '../assets/js/search.js'
import * as locale from '../assets/js/localeManager.js'
import generateThemeButtons from '../elements/themeButton.js'
import LanguageSelector from '../elements/langSelectButton.tsx'

import React, { Component } from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';



export default class Modal extends React.Component {
    
    state = {
        themes: [],
        search: [],
        locale: [],
        themeButtons: []
    }

    constructor() {
        super();

        themes.get().then((res) => {
            this.setState(prevState => ({
                themes: [...prevState.themes, res]
            }));
            
            generateThemeButtons(res['themes']).then((ress) => {
                this.setState(prevState => ({
                    themeButtons: [...prevState.themeButtons, ress]
                }))
            });

        });
        
        search.getProviders().then((res) => {
            this.setState(prevState => ({
                search: [...prevState.search, res]
            }))
        });

        locale.get('options').then((res) => {
            this.setState(prevState => ({
                locale: [...prevState.locale, res]
            }))
        });

        

    }

    componentDidMount() {

        // God this is such hacky bullshit

        
    }

    renderLocale(loc){
        try {
            return this.state.locale[0][loc]
        } catch (e) { return(loc) }
    }

    renderSearch(){
        try {
            return this.state.search[0]
        } catch (e) { }
    }

    render(){
        return (
            <section id="modal">
                <div id="main">
                    <header id="modal-header">
                        <h1>{this.renderLocale('options')}</h1>
                        <a href="#" title={'"' + this.renderLocale('close') + '"'} className="modal-close">
                            <Icon icon="mdi-close" />
                        </a>
                    </header>

                    <h2>{this.renderLocale('themes')}</h2>

                    <div id="modal-theme">
                        {this.state.themeButtons}
                    </div>


                    <div className="column">
                        <div className="leftColumn">

                            <h2>{this.renderLocale('searchOptions')}</h2>

                            <section id="providers">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>{this.renderLocale('website')}</th>
                                            <th>{this.renderLocale('prefix')}</th>
                                        </tr>

                                        {this.renderSearch()}
                                    </tbody>
                                </table>
                            </section>
                        </div>

                        <div className="rightColumn">
                            <h2>{this.renderLocale('langSettings')}</h2>
                            <LanguageSelector />
                        </div>
                    </div>

                    <header id="modal-footer">
                        <a href="https://github.com/jeroenpardon/"><span className="iconify" data-icon="mdi-github-box"></span></a>
                        <a href="https://materialdesignicons.com/"><span className="iconify" data-icon="mdi-material-design"></span></a>
                    </header>
                </div>


            </section>
        );
    }

}