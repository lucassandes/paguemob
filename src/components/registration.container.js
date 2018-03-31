import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Lucas Sandes',
            cpfOrCpnjSelect: 'CPF',
            cpfOrCnpj: '41855774860',
            gender: 'm',
            website: 'www.lucassandes.com',
            email: 'lucas@lucassandes.com', 
            telephone: '(12) 98168-5697',
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
        const { name, cpfOrCpnjSelect, cpfOrCnpj, gender, website, telephone, email } = this.state;
        const onFormSubmit = this.onFormSubmit;

       

        return (
            
            <div>
                <form onSubmit={onFormSubmit}>  
                    <div className="row">
                        <div className="">
                            <div className="row">
                                <div className=""></div>
                                <label htmlFor="nameInput"> Name </label>
                                <input className="u-full-width" type="text" placeholder="Full Name" id="nameInput" name="name" value={name} onChange={this.handleChange} />
                            </div> 
                            <div className="row">
                                <div className="six columns">
                                    <label htmlFor="contact-type">Contact type</label>
                                    <select className="u-full-width" id="contact-type" name="cpfOrCpnjSelect" value={cpfOrCpnjSelect} onChange={this.handleChange}>
                                        <option value="CPF">Person</option>
                                        <option value="CNPJ">Company</option>
                                    </select>
                                </div>
                                <div className="six columns">
                                    <label htmlFor="cpf-or-cnpj">{cpfOrCpnjSelect}</label>
                                    <input  className="u-full-width" type="text" placeholder={cpfOrCpnjSelect} 
                                            id="cpf-or-cnpj" name="cpfOrCnpj" value={cpfOrCnpj} onChange={this.handleChange} />
                                
                                </div>
                            </div>

                            <div className="row">
                                <div className="six columns">
                                    <label htmlFor="exampleRecipientInput">Gender</label>
                                    <select className="u-full-width" id="exampleRecipientInput" name="gender" value={gender} onChange={this.handleChange}>
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                    </select>
                                </div>
                                <div className="six columns">
                                    <label htmlFor="website">Website</label>
                                    <input  className="u-full-width" type="text" placeholder="www.domain.com" name="website" value={website}
                                            id="website" name="website" value={website} onChange={this.handleChange} />
                                
                                </div>
                            </div>

                            <div className="row">
                                <div className="six columns">
                                    <label htmlFor="email">Email</label>
                                    <input  className="u-full-width" type="email" placeholder="email@domain.com" 
                                            id="email" name="email" value={email} onChange={this.handleChange} />
                                   
                                </div>
                                <div className="six columns">
                                    <label htmlFor="telephone">Telephone</label>
                                    <input  className="u-full-width" type="text" placeholder="(__)____-____" 
                                            id="telephone" name="telephone" value={telephone} onChange={this.handleChange} />
                                
                                </div>
                            </div>

                            <input className="button-primary" type="submit" value="Enviar" />
                            <div>Login Props: {JSON.stringify(this.props.login)} == {JSON.stringify(this.props.isAuthenticated)}</div>
                        </div>
                    </div>
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        isAuthenticated: state.loginIsAuthenticated,
    };
};

export default connect(mapStateToProps, null)(Registration)

