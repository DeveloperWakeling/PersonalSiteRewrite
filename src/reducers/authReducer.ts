import { LOGIN, SIGNUP, LOGOUT, PROTECTED } from '../actions/types';
interface initState {
    token: any,
    loggedIn: boolean,
    loginError: boolean
}
const initialState: initState = {
    token: localStorage.getItem('token'),
    loggedIn: localStorage.getItem('token') ? true : false,
    loginError: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            let token = action.payload.token;
            let loggedIn = false;
            if(token){
                localStorage.setItem('token', action.payload.token);
                loggedIn = true;
            }
            return {
                ...state,
                token: token,
                loggedIn: loggedIn,
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
                loggedIn: action.payload.loggedIn
            }
        case LOGOUT: 
            localStorage.removeItem('token');
            return {
                ...state,
                token: undefined,
                loggedIn: false
            }
        default:
            return state;
    }
}