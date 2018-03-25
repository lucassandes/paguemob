import { LOGIN } from '../actions/index';


// export default function(state = [], action) {
//     console.log('Action recieved!!', action);
//     switch(action.type){
//         case LOGIN: 
//             //return state.concat([action.payload.data]);
//             return [ action.payload.data, ...state];
//     }
//     return state;
// }

export function loginHasErrored(state = false, action) {
    switch (action.type) {
        case 'LOGIN_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function loginIsLoading(state = false, action) {
    switch (action.type) {
        case 'LOGIN_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function login(state = [], action) {
    console.log('Action recieved!!', action);
    switch (action.type) {
        case 'LOGIN_FETCH_DATA_SUCCESS':
            console.log('Headers', action.items.config.headers);
            return action.items.config.headers;
        default:
            return state;
    }
}