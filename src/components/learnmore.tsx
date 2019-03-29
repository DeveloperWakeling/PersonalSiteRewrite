import * as React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
const styles=require('../styles/homestyle.css');

export default class LearnMore extends React.Component {

    render(){

        return (
                <Container>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder="Name" />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </Form.Field>
                        <Button fluid color="blue">Send Me More Info</Button>
                    </Form>
                </Container>
        )
    }

}