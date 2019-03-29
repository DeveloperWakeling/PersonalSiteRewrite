import * as React from 'react';
const styles = require('../styles/homestyle.css');
import { connect } from 'react-redux';
import { Container, Grid, Form, Button, GridRow, Image, GridColumn, Divider } from 'semantic-ui-react';
import { RootState } from '../store';
import LearnMore from '../components/learnmore';
import Dashboard from './dashboard';
import SignUp from '../components/signup';
import Login from '../pages/login';

interface HomeStateProps {
    loggedIn: boolean;
}

interface HomeDispatchProps {

}

interface HomeState {

}

class Home extends React.Component<HomeStateProps & HomeDispatchProps, HomeState> {

    constructor(props: any) {
        super(props);
    }


    render() {
        if(this.props && this.props.loggedIn){
            return <Dashboard />    
        }
        return (
            <Container style={{ paddingTop: '60px' }}>
                <Grid container>
                    <Grid.Row stretched>
                        <Grid.Column width={4}>
                            <Grid.Row>
                                <Grid.Column width={4} className={styles.gridSpacing}>
                                    <Image src='https://s3.us-east-2.amazonaws.com/developerwakeling/placeholder.png' />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Image src='https://s3.us-east-2.amazonaws.com/developerwakeling/placeholder.png' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Grid.Row>
                                <Grid.Column width={4} className={styles.gridSpacing}>
                                    <Image src='https://s3.us-east-2.amazonaws.com/developerwakeling/placeholder.png' />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Image src='https://s3.us-east-2.amazonaws.com/developerwakeling/placeholder.png' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column stretched width={8}>
                            <SignUp />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider horizontal section>
                        Learn More
                    </Divider>
                    <LearnMore />
                </Grid>
            </Container>
        );
    }
}
const mapStateToProps = (state: RootState) => ({
    loggedIn: state.auth.loggedIn
});

const dispatchToProps = {

}

export default connect<HomeStateProps, HomeDispatchProps>(mapStateToProps, dispatchToProps)(Home)