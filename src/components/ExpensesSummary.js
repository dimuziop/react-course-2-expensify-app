import React from 'react';
import {connect} from 'react-redux';
import TotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        {props.expenses.length === 0 ? null : (<h1>Viewing {props.expenses.length} - Totalling {numeral(TotalExpenses(props.expenses)/100).format('$0,0.00')} </h1>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);