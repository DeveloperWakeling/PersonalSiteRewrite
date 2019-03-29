import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Menu, Container, Image } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import NavigationMenu from './header';
import Main from './main';
import { History } from 'history';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import ButterToast from 'butter-toast';
import store,  { history } from './store';
import createBrowserHistory from 'history/createBrowserHistory';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Container fluid>
                    <ButterToast trayPosition='top-right' />
                    <NavigationMenu />
                    <Main />
                </Container>
            </ConnectedRouter>
        </Provider>
    )
};

export default App;
ReactDom.render(
    <App />,
    document.getElementById('root'));
