import * as React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import * as Models from '../models';
const styles = require('../styles/homestyle.css');

interface LearnMoreState {
    email: string,
    name: string
}

interface PassedProps {
    signUp: (signUpForm: Models.LearnMore) => void;
}
export default class LearnMore extends React.Component<PassedProps, LearnMoreState> {

    name: any;
    email: any;
    constructor(props: PassedProps) {
        super(props);
        this.state = {
            email: "",
            name: ""
        }
    }
    onChange = (e) => {
        switch (e.target.name) {
            case "email":
                this.setState({ email: e.target.value as string });
                break;
            case "name":
                this.setState({ name: e.target.value as string });
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <Container>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder="Name" name="name" ref={el => this.name = el} onChange={this.onChange.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type="email" placeholder="Email" name="email" ref={el => this.email = el}onChange={this.onChange.bind(this)}/>
                    </Form.Field>
                    <Button fluid color="blue" onClick={this.subscribe}>Send Me More Info</Button>
                </Form>
            </Container>
        )
    }

    subscribe = () => {
        if(this.state.name != '' && this.state.email != ''){
            let sub: Models.LearnMore = { name: this.state.name, email: this.state.email};
            this.props.signUp(sub);
            this.setState({ name: "", email: ""});
            this.email.value = "";
            this.name.value = "";
        }
    }

}