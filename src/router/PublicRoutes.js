import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PubicHeader from '../components/PublicHeader';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (

    <Route {...rest} component={(props) => (
        !isAuthenticated ? (
            <div>
                <PubicHeader/>
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to={'/dashboard'}/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);