import { Icon } from '@iconify/react';
import * as themes from '../assets/js/themeManager.js'
import * as search from '../assets/js/search.js'
import * as locale from '../assets/js/localeManager.js'
import generateThemeButtons from '../elements/themeButton.js'

import React from 'react'





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

        
    }

    renderLocale(loc){
        try {
            return this.state.locale[0][loc]
        } catch (e) {}
    }

    render(){
        return (
            <section id="modal">
                <div id="main">
                    <header id="modal-header">
                        <h1>{this.renderLocale('options')}</h1>
                        <a href="#" title={'"' + this.renderLocale('close') + '"'} class="modal-close">
                            <Icon icon="mdi-close" />
                        </a>
                    </header>

                    <h2>{this.renderLocale('themes')}</h2>

                    <div id="modal-theme">
                        {this.state.themeButtons}
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