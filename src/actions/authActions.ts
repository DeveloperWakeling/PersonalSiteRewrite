import { LOGIN, LOGOUT } from './types';
import * as Models from '../models';
import { push } from 'connected-react-router';

//TODO: SWAP OUT THE LOCALHOST WITH ACTUAL URL WHEN WORKING PROPERLY
export const login = (loginCredentials: Models.LoginCreditentials) => dispatch => {
    fetch(API_URL + '/api/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginCredentials)
    })
        .then(data => data.json())
        .then(payload => {
            dispatch({
                type: LOGIN,
                payload: payload
            });
        });
}

export const signup = (signupCredentials: Models.SignUpCredentials) => dispatch => {
    fetch(API_URL + '/api/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(signupCredentials)
    })
        .then(data => data.json())
        .then(payload => {
            if (payload.token != null && payload.token) {
                dispatch({
                    type: LOGIN,
                    payload: payload
                });
            }
            else {
                throw new Error('Invalid Login');
            }
        });
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    dispatch(push('/'));
}

export const protectedRoute = () => (dispatch) => {
    fetch(API_URL + '/api/protected', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(data => {
            if (data.status === 401) {
                logout()(dispatch);
            }
            return data.json()
        });
}