import React, {Component} from 'react';
import {connect} from 'react-redux';

import { withRouter } from "react-router-dom";
  
const AuthButton = withRouter(
    ({ history }) =>
      this.props.isAuthenticated ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              //fakeAuth.signout(() => history.push("/"));
              console.log("Log out!!");
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )
  );
  
const mapStateToProps = (state) => {
    return {
        login: state.login,
        isAuthenticated: state.loginIsAuthenticated,
    };
};

export default connect(mapStateToProps, null)(AuthButton)