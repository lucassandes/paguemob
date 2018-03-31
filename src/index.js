import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';



import './index.css';
import './styles/normalize.css';
import './styles/skeleton.css';

const store = configureStore(); 
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
