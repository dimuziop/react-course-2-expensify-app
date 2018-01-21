import React from 'react';

const LoadingPage = () => (
    <div className={"loader"}>
        <img className={"loader__image"} src="/images/loader.gif" alt=""/>
        <h3 className={"loader__text"}>Loading ...</h3>
    </div>
);

export default LoadingPage;