import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import App from './index';

const initialState = {};

const middleware = [thunk];

export const history = createBrowserHistory();
const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancer(
    applyMiddleware(routerMiddleware(history),...middleware),
    )
);


export interface RootState {
    auth: any,
    yearbook: any
}

export default store;