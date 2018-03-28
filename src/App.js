import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/login.component'; 
import Registration from './components/registration.container';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Login />
          <Registration/>
      </div>
    );
  }
}

export default App;
