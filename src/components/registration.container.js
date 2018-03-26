import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/index';
import {loginFetchData} from '../actions/index';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cpfOrCpnjRadio: '',
            gender: '',
            website: '',
            telephone: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
  

    onFormSubmit(event) {
        event.preventDefault();
        console.log("Form submit!");        
    }

    

    render(){
        const { name, cpfOrCpnjRadio, gender, website, telephone } = this.state;
        const onFormSubmit = this.onFormSubmit;

       

        return (
            <div>
                <form onSubmit={onFormSubmit}>  
                    <div className="row">
                        <div className="six columns">
                            <label htmlFor="emailInput"> Email </label>
                            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="emailInput" name="username" value={username} onChange={this.handleChange} />

                            <label htmlFor="passwordInput"> Passoword!</label>
                            <input className="u-full-width" type="password" placeholder="Password" id="passwordInput" name="password" value={password} onChange={this.handleChange}/>

                            <input className="button-primary" type="submit" value="Login" />
                            <div>{JSON.stringify(this.props.login)} == {JSON.stringify(this.props.isAuthenticated)}</div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



