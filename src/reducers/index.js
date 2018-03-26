import { combineReducers } from 'redux';
// import {Login} from './authentication.reducer';
import { login, loginHasErrored, loginIsLoading, loginIsAuthenticated } from './authentication.reducer';

const rootReducer = combineReducers({
  login,
  loginHasErrored,
  loginIsLoading,
  loginIsAuthenticated
});

export default rootReducer;
