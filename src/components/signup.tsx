import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { Form, Segment, Button, Container, Divider, Transition } from 'semantic-ui-react';
import { signup } from '../actions/authActions';
import Login from '../pages/login';
import * as Models from '../models';

interface SignUpStateProps {
    loginError: boolean;
}

interface SignUpDispatchProps {
    signup: (signupCreds: Models.SignUpCredentials) => void;
}

interface SignUpState {
    email: string;
    password: string;
    passwordConf: string;
    username: string;
    name: string;
}

class SignUp extends React.Component<SignUpStateProps & SignUpDispatchProps, SignUpState>{

    constructor(props: any){
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConf: "",
            username: "",
            name: ""
        }
    }
    onChange = (e) => {
        switch(e.target.name){
            case "email":
                this.setState({email: e.target.value as string });
                break;
            case "password":
                this.setState({password: e.target.value as string });
                break;
            case "passwordConf":
                this.setState({passwordConf: e.target.value as string });
                break;
            case "username":
                this.setState({username: e.target.value as string });
                break;
            case "name":
                this.setState({name: e.target.value as string });
                break;
            default:
                break;
        }
        //this is broken within TS for some reason
        // this.setState({ [e.target.name]: e.target.value as string});
    }
    render() {
        return (
            <Form as={Segment} raised>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder="Name" name="name" onChange={this.onChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="email" onChange={this.onChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder="Username" name="username" onChange={this.onChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={this.onChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Password" name="passwordConf" onChange={this.onChange.bind(this)} />
                </Form.Field>
                <Button fluid attached='bottom' color="blue" onClick={this.signup.bind(this)}>Sign Up</Button>
                <Divider horizontal>or</Divider>
                <Login stackedButton/>
            </Form>
        );

    }

    signup = () => {
        let signup: Models.SignUpCredentials = this.state;
        this.props.signup(signup);
    }

}

const mapStateToProps = (state: RootState) => ({
    loginError: state.auth.loginError
});

const dispatchToProps = {
    signup: signup
}

export default connect<SignUpStateProps, SignUpDispatchProps>(mapStateToProps, dispatchToProps)(SignUp);