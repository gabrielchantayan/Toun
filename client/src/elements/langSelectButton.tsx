import React from 'react';

import AsyncSelect from 'react-select/async';
import { callbackify } from 'util';
// import { ColourOption, colourOptions } from '../data';
import * as config from '../assets/js/configManager.js';


interface State {
    readonly inputValue: string;
}


async function getOptions(inputValue, callback) {
    config.get('availible-locales').then((res) => {

        let opt = []

        for (let lang in res){
            opt.push({ value: lang, label: res[lang]['language']})
        }
    
        callback(opt)
    })

}

export default class LanguageSelector extends React.Component {
    state: State = { inputValue: '' };


    constructor(props) {
        super(props);
        

    }

    handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };


    render() {
        return (
            <div>
                <AsyncSelect
                    classNamePrefix='reactButton'
                    cacheOptions
                    loadOptions={getOptions}
                    defaultOptions
                    onInputChange={this.handleInputChange}
                />
            </div>
            );
        }
}
