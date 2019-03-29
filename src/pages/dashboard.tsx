import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Header, Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { protectedRoute } from '../actions/authActions';
import { RootState } from '../store';

interface DashboardStateProps {

}

interface DashboardDispatchProps {
    //Will hold protected route connection
    getProtected: () => void;
}

class Dashboard extends React.Component<DashboardStateProps & DashboardDispatchProps, any>{
    render() {
        return (
            <Container fluid style={{paddingTop: '60px'}}>
                <Header.Content style={{textAlign: 'center', fontSize: 'x-large', fontWeight: 'bold'}}>
                    Logged In
                </Header.Content>
                {/* Start the creation of the grid here */}
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4} textAlign='center'>D</Grid.Column>
                        <Grid.Column width={4} textAlign='center'>D</Grid.Column>
                        <Grid.Column width={4} textAlign='center'>D</Grid.Column>
                        <Grid.Column width={4} textAlign='center'>D</Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState) => ({

});

const dispatchToProps = {
    getProtected: protectedRoute
}
export default connect<DashboardStateProps, DashboardDispatchProps, {}>(
    mapStateToProps,
    dispatchToProps
)(Dashboard);