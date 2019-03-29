import * as React from 'react';
import { Modal, Button, Container, Form, Menu, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login as authorize } from '../actions/authActions';
import { RootState } from '../store';
import * as Models from '../models';

interface ModalState {
    username: string,
    password: string,
    open: boolean
}

interface ModalStateProps {
    token: any;
    loggedIn: boolean;
    loginError: boolean;
}

interface ModalDispatchProps {
    login: (loginCreds: Models.LoginCreditentials) => void;
}

interface PassedProps {
    stackedButton?: boolean;
}
class Login extends React.Component<ModalStateProps & ModalDispatchProps & PassedProps, ModalState> {

    constructor(props) {
        super(props);
        this.state = { username: null, password: null, open: false };
    }
    login = () => {
        let creds: Models.LoginCreditentials = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(creds);
    }

    componentDidUpdate(oldProps: ModalStateProps) {
        if (oldProps.loggedIn != this.props.loggedIn && this.props.loggedIn) {
            this.handleClose();
        }
    }

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });
    onChange = (e) => {
        switch(e.target.name){
            case "password":
                this.setState({password: e.target.value as string });
                break;
            case "username":
                this.setState({username: e.target.value as string });
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <Modal trigger={this.props && this.props.stackedButton ? <Button fluid style={{ backgroundColor: '#670cbc', color: 'white' }} onClick={this.handleOpen.bind(this)} content='Login' /> : <Menu.Item position='right' as={Link} style={{ color: 'white' }} to='' onClick={this.handleOpen.bind(this)} name='login' />}
                open={this.state.open}
                onClose={this.handleClose.bind(this)}
                dimmer="blurring" size="tiny">
                <Modal.Header>{this.props.loginError ? "Incorrect Login" : "Please Login"}</Modal.Header>
                <Modal.Content as={Form}>
                    <Form.Input placeholder="username" name="username" onChange={this.onChange.bind(this)} autoFocus />
                    <Form.Input placeholder="password" name="password" type="password" onChange={this.onChange.bind(this)} />
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                    <Button positive icon='checkmark' labelPosition='right' content='Login' onClick={this.login.bind(this)} />
                </Modal.Actions>
            </Modal>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    token: state.auth.token,
    loggedIn: state.auth.loggedIn,
    loginError: state.auth.loginError
});

const dispatchToProps = {
    login: authorize
}


export default connect<ModalStateProps, ModalDispatchProps, PassedProps>(mapStateToProps, dispatchToProps)(Login)