import * as React from 'react';
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
// import Home from './pages/home';
import Home from './pages/home.v2';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import { RootState } from './store';
import { connect } from 'react-redux';

interface MainStateProps {
    loggedIn?: boolean;
}
interface  MainDispatchProps {
}
class Main extends React.Component<MainStateProps & RouteComponentProps<any>, any> {
    //TODO: add dynamic routes the user has when logged in such as their yearbook
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Redirect to='/' />
            </Switch>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    loggedIn: state.auth.loggedIn
});

const dispatchToProps = {
}

export default withRouter(connect<MainStateProps, MainDispatchProps, {}>(
    mapStateToProps,
    dispatchToProps
)(Main));
