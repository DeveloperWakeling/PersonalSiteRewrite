import { LOGIN, SIGNUP, LOGOUT, PROTECTED, SUBSCRIBE } from '../actions/types';
import * as Models from '../models';
import * as jwt_decode from 'jwt-decode';
interface initState {
    token: any,
    loggedIn: boolean,
    loginError: boolean,
    user: Models.User
}
const initialState: initState = {
    token: localStorage.getItem('token'),
    loggedIn: localStorage.getItem('token') ? true : false,
    loginError: false,
    user: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')).user : null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            let token = action.payload.token;
            let loggedIn = false;
            let user = null;
            if(token){
                localStorage.setItem('token', token);
                loggedIn = true;
            }
            return {
                ...state,
                token: token,
                loggedIn: loggedIn,
                user: action.payload.user,
                loginError: !!action.payload.loginError//Added double ! to filter out if there wasn't a login error
            }
        case SIGNUP:
            if(action.payload.duplicate){
                return {
                    ...state,
                    loginError: true
                }
            }
            if(action.payload && action.payload.loggedIn){
                localStorage.setItem('token', action.payload.token);
            }
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loggedIn: action.payload.loggedIn
            }
        case LOGOUT: 
            localStorage.removeItem('token');
            return {
                ...state,
                token: undefined,
                loggedIn: false,
                user: null
            }
        case SUBSCRIBE:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}