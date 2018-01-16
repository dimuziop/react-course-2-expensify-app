import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { startSetExpenses } from './actions/expenses'
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user){
        console.log('Logged in')
    } else {
        console.log('Log out')
    }
});