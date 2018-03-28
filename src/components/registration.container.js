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
            cpfOrCpnjSelect: '',
            cpfOrCpnj: '',
            gender: '',
            website: '',
            telephone: '',
        };

        this.handleChange = this.handleChange.bind(this);
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
                            <div className="row">
                                <div class=""></div>
                                <label htmlFor="nameInput"> Name </label>
                                <input className="u-full-width" type="text" placeholder="Full Name" id="nameInput" name="name" value={name} onChange={this.handleChange} />
                            </div> 
                            <div className="row">
                                <div className="six columns">
                                    <label for="exampleRecipientInput">Contact type</label>
                                    <select class="u-full-width" id="exampleRecipientInput">
                                        <option value="Option 1">Person</option>
                                        <option value="Option 2">Company</option>
                                    </select>
                                </div>
                                <div className="six columns">
                                    <label for="exampleRecipientInput">CPF</label>
                                    <input  className="u-full-width" type="text" placeholder="CPF" 
                                            id="nameInput" name="name" value={name} onChange={this.handleChange} />
                                
                                </div>
                            </div>

                            <input className="button-primary" type="submit" value="Login" />
                            <div>{JSON.stringify(this.props.login)} == {JSON.stringify(this.props.isAuthenticated)}</div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;