import { combineReducers } from 'redux';
import authReducer from './authReducer';
import yearbookReducer from './yearbookReducer';

export default combineReducers({
    auth: authReducer,
    yearbook: yearbookReducer
});