import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class AdressForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            streetName: '',
            streetNumber: '',
            neighborhood: '',
            complement: '',
            zipCode: '',
            city: '', 
            state: '',
            country: ''
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
        console.log("Form submit!", this.state);        
    }

    

    render(){
        const { streetName, streetNumber, neighborhood, complement, zipCode, city, state, country } = this.state;
        const onFormSubmit = this.onFormSubmit;
    
        return (
            <div>
                <form onSubmit={onFormSubmit}>  
                    <div className="row">
                        <div className="six columns">
                            <label htmlFor="zipCodeInput"> Zip Code </label>
                            <input className="u-full-width" type="text" placeholder="_____-___" id="zipCodeInput" name="zipCode" value={zipCode} onChange={this.handleChange} />
                        </div>

                            <div className="six columns">
                            <label htmlFor="streetNameInout">Street Name</label>
                            <input className="u-full-width" type="text" placeholder="Street Name" id="zipCodeInput" name="zipCode" value={zipCode} onChange={this.handleChange} />
                        </div>

                    </div> 
                    <div className="row">
                        
                        <div className="six columns">
                            <label htmlFor="numberInput">Number</label>
                            <input  className="u-full-width" type="number" placeholder="Number" 
                                    id="numberInput" name="streetNumber" value={streetNumber} onChange={this.handleChange} />
                        </div>

                        <div className="six columns">
                            <label htmlFor="complementInput">complement</label>
                            <input  className="u-full-width" type="text" placeholder="complement" 
                                    id="complementInput" name="complement" value={complement} onChange={this.handleChange} />
                        </div>

                    </div>

                    <div className="row">
                        <div className="six columns">
                            <label htmlFor="neighborhoodInput">Neighborhood</label>
                            <input  className="u-full-width" type="text" placeholder="Neighborhood" 
                                    id="neighborhoodInput" name="neighborhood" value={neighborhood} onChange={this.handleChange} />
                        </div>
                        <div className="six columns">
                            <label htmlFor="cityInput">city</label>
                            <input  className="u-full-width" type="text" placeholder="city" 
                                    id="cityInput" name="city" value={city} onChange={this.handleChange} />
                            
                        </div>
                    </div>

                    <div className="row">
                       
                        <div className="six columns">
                            <label htmlFor="stateInput">state</label>
                            <input  className="u-full-width" type="text" placeholder="state" 
                                    id="state" name="state" value={state} onChange={this.handleChange} />
                        
                        </div>

                        <div className="six columns">
                            <label htmlFor="countryInput">country</label>
                            <input  className="u-full-width" type="text" placeholder="country" 
                                    id="countryInput" name="country" value={country} onChange={this.handleChange} />
                        </div>
                    </div>

                    <input className="button-primary" type="submit" value="Enviar" />
                    <div>Login Props: {JSON.stringify(this.props.login)} == {JSON.stringify(this.props.isAuthenticated)}</div>
                </form>
            </div>
        );
    }
}

export default AdressForm;