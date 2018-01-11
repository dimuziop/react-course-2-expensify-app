import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

/*store.dispatch(addExpense({description: 'Water bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 5000, createdAt: 500}));
store.dispatch(addExpense({description: 'Expenses bill', amount: 2000, createdAt: 1500}));
store.dispatch(addExpense({description: 'Interest bill', amount: 10000, createdAt: 2000}));
store.dispatch(addExpense({description: 'Bank bill', amount: 1000, createdAt: -500}));
store.dispatch(addExpense({description: 'College bill', amount: 12000, createdAt: 14}));
store.dispatch(setTextFilter('gas'));*/
//store.dispatch(setTextFilter('water'));

/*setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
},3000);*/

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
