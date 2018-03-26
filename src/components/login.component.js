import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/index';
import {loginFetchData} from '../actions/index';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'lucassandes92@gmail.com',
            password: 'paguemob751'
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
    doLogin() {
        console.log("Do Login", this.state.username, this.state.password);
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log("Do Login", this.state.username, this.state.password);
        
        this.props.loginFetchData(this.state.username, this.state.password);
    }

    

    render(){
        const { username, password } = this.state;
        const onFormSubmit = this.onFormSubmit;
        const doLogin = this.doLogin;

        if (this.props.hasErrored) {
            return <p>Sorry! Error login in</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <form onSubmit={onFormSubmit}>  
                    <div className="row">
                        <div className="six columns">
                            <label htmlFor="emailInput"> Email </label>
                            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="emailInput" name="username" value={username} onChange={this.handleChange} />

                            <label htmlFor="passwordInput"> Passoword</label>
                            <input className="u-full-width" type="password" placeholder="Password" id="passwordInput" name="password" value={password} onChange={this.handleChange}/>

                            <input className="button-primary" type="submit" value="Login" />
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
        hasErrored: state.loginHasErrored,
        isLoading: state.loginIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //bindActionCreators({login}, dispatch);
        loginFetchData: (username, password) => dispatch(loginFetchData(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)

//test git
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({login}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(Login);

