import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const PublicHeader = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(PublicHeader);