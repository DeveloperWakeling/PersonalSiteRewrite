import * as React from 'react';
import { Container, Grid, Form, Button, GridRow, Image, GridColumn, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { raiseToast } from '../utils/utils';
import * as Models from '../models';
import { RootState } from '../store';
import { subscribe } from '../actions/authActions';
const s = require('../styles/aboutstyle.css');

interface AboutStateProps {
    user: Models.User
}

interface AboutDispatchProps {
    subscribe: (userid: string) => void;
}
class About extends React.Component<AboutStateProps & AboutDispatchProps, any> {
    /**
     *
     */
    constructor(props: AboutStateProps & AboutDispatchProps) {
        super(props);
    }
    render() {
        return (
            <Container fluid style={{ paddingTop: '60px' }}>
                {/* <ButterToast trayPosition='top-right' /> */}
                <Header.Content className={s.header}>
                    About Page
                </Header.Content>
                <Grid stretched>
                    <Grid.Row>
                        <Grid.Column width={4} />
                        <Grid.Column width={8}>
                            <Button fluid color='blue' onClick={this.subscribe} style={{ marginLeft: 'auto', marginRight: 'auto' }}>Subscribe to my Newsletter</Button>
                        </Grid.Column>
                        <Grid.Column width={4} />
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
    subscribe = () => {
        if (this.props.user) {
            this.props.subscribe(this.props.user._id);
        }
        else {
            alert("User not logged in");
        }
    }
}
const mapStateToProps = (state: RootState) => ({
    user: state.auth.user
});

const dispatchToProps = {
    subscribe: subscribe
}

export default connect<AboutStateProps, AboutDispatchProps>(mapStateToProps, dispatchToProps)(About);