import React from 'react';
import ConectedExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";


const ExpenseDashboardPage = (props) => (
    <div>
        <ExpenseListFilters />
        <ConectedExpenseList />
    </div>
);

export default ExpenseDashboardPage;