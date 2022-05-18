import { Icon } from '@iconify/react';
import * as themes from '../assets/js/themeManager.js'
import * as search from '../assets/js/search.js'
import * as locale from '../assets/js/localeManager.js'

import React from 'react'

export default class Modal extends React.Component {
    
    state = {
        themes: [],
        themeCSS: [],
        search: [],
        locale: []
    }

    constructor() {
        super();

        themes.get().then((res) => {
            this.setState(prevState => ({
                themes: [...prevState.themes, res]
            }))
        });

        

        themes.getCSS().then((res) => {
            this.setState(prevState => ({
                themeCSS: [...prevState.themeCSS, res]
            }))
        });

        search.get().then((res) => {
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

        const $style = document.createElement("style");
        document.head.appendChild($style);
        $style.innerHTML = this.state.themeCSS;
    }


    renderLocale(loc){
        try {
            return this.state.locale[0][loc]
        } catch (e) {}
    }

    render(){
        return (
            <section id="modal">
                <div>
                    <header id="modal-header">
                        <h1>{this.renderLocale('options')}</h1>
                        <a href="#" title={'"' + this.renderLocale('close') + '"'} class="modal-close">
                            <Icon icon="mdi-close" />
                        </a>
                    </header>

                    <h2>{this.renderLocale('themes')}</h2>

                    <div id="modal-theme">
                        <button data-theme="blackboard" class="theme-button theme-blackboard">Blackboard</button>
                        <button data-theme="gazette" class="theme-button theme-gazette">Gazette</button>
                        <button data-theme="espresso" class="theme-button theme-espresso">Espresso</button>
                        <button data-theme="cab" class="theme-button theme-cab">Cab</button>
                        <button data-theme="cloud" class="theme-button theme-cloud">Cloud</button>
                        <button data-theme="lime" class="theme-button theme-lime">Lime</button>
                        <button data-theme="passion" class="theme-button theme-passion">Passion</button>
                        <button data-theme="blues" class="theme-button theme-blues">Blues</button>
                        <button data-theme="chalk" class="theme-button theme-chalk">Chalk</button>
                        <button data-theme="tron" class="theme-button theme-tron">Tron</button>
                        <button data-theme="paper" class="theme-button theme-paper">Paper</button>
                    </div>

                    <h2>{this.renderLocale('searchOptions')}</h2>

                    <section id="providers">
                        <script type="text/handlebars-template" id="providers-template">
                            <table>
                                <tr>
                                    <th>Website</th>
                                    <th>Prefix</th>
                                </tr>
                                {/* {{#providers}}
                                <tr>
                                    <td><a href="{{url}}">{{name}}</a></td>
                                    <td>{{prefix}}</td>
                                </tr>
                                {{/providers}} */}
                            </table>
                        </script>
                    </section>

                    <header id="modal-footer">
                        <a href="https://github.com/jeroenpardon/"><span class="iconify" data-icon="mdi-github-box"></span></a>
                        <a href="https://materialdesignicons.com/"><span class="iconify" data-icon="mdi-material-design"></span></a>
                    </header>
                </div>
            </section>
        );
    }

}