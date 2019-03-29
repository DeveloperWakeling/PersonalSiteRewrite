import * as React from 'react';
import { Menu, Container, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {RootState} from './store';
import { logout } from './actions/authActions';
const style = require('./main.css');
import Login from './pages/login';

interface NavState {
    modalOpened: boolean;
}

interface NavStateProps {
    loggedIn: boolean;
}

interface NavDispatchProps {
    logout: () => void;
}

const mapStateToProps = (state: RootState) => ({
    loggedIn: state.auth.loggedIn
});

const dispatchToProps = {
    logout: logout
}

type Props = NavStateProps & NavDispatchProps;
class NavigationMenu extends React.Component<Props, NavState> {

    constructor(props: any){
        super(props);
        this.state = { modalOpened: false }
    }

    logout = () => this.props.logout();

    render() {
        return (
            // <Container fluid className={style.menu}>
                <Menu pointing secondary fixed='top' style={{backgroundColor: '#0d71bb'}}>
                    <Menu.Item as={Link} to="/" style={{fontWeight: 'bold', color: 'white'}}>My Yearbook</Menu.Item>
                    <Menu.Item as={Link} to="/" name="home" style={{color: 'white'}}/>
                    <Menu.Item as={Link} to="/about" name="about" style={{color: 'white'}} />
                       { this.props.loggedIn ? <Menu.Item position="right" name='logout' onClick={this.logout.bind(this)} to='' style={{color: 'white'}} />
                        : <Login /> }
                </Menu>
            // </Container>
        );
    }
}


export default connect<NavStateProps, NavDispatchProps, {}>(
    mapStateToProps, dispatchToProps
)(NavigationMenu);
