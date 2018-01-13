import React from 'react';
import ConectedExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";
import ConectedExpensesSummary from './ExpensesSummary';


const ExpenseDashboardPage = (props) => (
    <div>
        <ConectedExpensesSummary />
        <ExpenseListFilters />
        <ConectedExpenseList />
    </div>
);

export default ExpenseDashboardPage;