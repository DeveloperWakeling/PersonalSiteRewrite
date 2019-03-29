import * as React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';
import { raiseToast } from '../utils/utils';
const s = require('../styles/aboutstyle.css');

export default class About extends React.Component {
    render() {
        return (
            <Container fluid style={{ paddingTop: '60px' }}>
                {/* <ButterToast trayPosition='top-right' /> */}
                <Header.Content className={s.header}>
                    About Page
                    <Button onClick={this.raiseNotification.bind(this)}>Hello</Button>
                </Header.Content>
            </Container>
        );
    }

    raiseNotification = () => {
        raiseToast('Error','Err','fa-bath');
    }
}
