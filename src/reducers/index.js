import { combineReducers } from 'redux';
// import {Login} from './authentication.reducer';
import { login, loginHasErrored, loginIsLoading } from './authentication.reducer';

const rootReducer = combineReducers({
  login,
  loginHasErrored,
  loginIsLoading
});

export default rootReducer;
