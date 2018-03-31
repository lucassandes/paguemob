
import axios from 'axios';

//const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const API_URL = 'https://paguemob-interview-environment.firebaseapp.com';

export const LOGIN = 'LOGIN';

// export function login(username, password){

//     const url = `${API_URL}/auth`;
    
//     const request = axios.get(url, {
//         auth: {
//             username: username,
//             password: password
//         }
//       });
//     //console.log('Request:', request);
//     return {
//         type: LOGIN,
//         payload: request
//     };
// }

export function loginHasErrored(bool) {
    return {
        type: 'LOGIN_HAS_ERRORED',
        hasErrored: bool
    };
}
export function loginIsLoading(bool) {
    console.log("loading...");
    return {
        type: 'LOGIN_IS_LOADING',
        isLoading: bool
    };
}
export function loginFetchDataSuccess(items) {
    return {
        type: 'LOGIN_FETCH_DATA_SUCCESS',
        items
    };
}

export function loginIsAuthenticated(bool) {
    return {
        type: 'LOGIN_IS_AUTHENTICATED',
        isAuthenticated: bool
    }
}

export function loginFetchData(username, password) {
    const url = `${API_URL}/auth`;
    return (dispatch) => {
        dispatch(loginIsLoading(true));
        dispatch(loginIsAuthenticated(false));
        axios.get(url, {
            auth: {
                username: username,
                password: password
            }
          }).then((response) => {
            dispatch(loginIsLoading(false));
            dispatch(loginIsAuthenticated(true));
            dispatch(loginFetchDataSuccess(response));
            console.log(response);
          })
          .catch((error) => {
            dispatch(loginIsLoading(false));
            dispatch(loginHasErrored(true));
            console.log(error);
          });
    };
}
