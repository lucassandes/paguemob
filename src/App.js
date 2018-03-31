import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from './components/login.component'; 
import Registration from './components/registration.container';
import AdressForm from './components/adress.container';
import AuthButton from './components/authButton';
import PrivateRoute from './components/privateRoute';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Login} />
          <PrivateRoute path="/registration" isAuthenticated={this.props.isAuthenticated} component={Registration} />
        </div>
      </Router>

      
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.loginIsAuthenticated,
      isLoading: state.loginIsLoading
  };
};

// const mapStateToProps = state => ({
//   isAuthenticated: state.isAuthenticated
// });

export default connect(mapStateToProps)(App);

// export default App;
