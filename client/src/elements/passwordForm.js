import React from 'react'
import * as locale from '../assets/js/localeManager.js'

export default class PasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', locale:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        locale.get('options').then((res) => {
            this.setState(prevState => ({
                locale: [...prevState.locale, res]
            }))
        });

    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    renderLocale(loc){
        try {
            return this.state.locale[0][loc]
        } catch (e) { return(loc) }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>{this.renderLocale('password')}</h1>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}