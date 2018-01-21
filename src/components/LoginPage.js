import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from "../actions/auth";

export const LoginPage = ( {startLogin} ) => (
    <div className={"box-layout"}>
        <div className={"box-layout__box"}>
            <p>It's time to get your expenses under control</p>
        <button className={"login-button ripple"} onClick={ startLogin }>
            Login with Google
        </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);