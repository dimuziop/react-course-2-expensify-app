import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TotalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div className={"page-header"}>
        <div className={"content-container"}>
            {props.expenses.length === 0 ? null : (<h1 className={"page_header__title"}>Viewing <span>{props.expenses.length}</span> -
                Totalling <span className={"span"}>{numeral(TotalExpenses(props.expenses) / 100).format('$0,0.00')}</span> </h1>)}
            <div className={"page-header__actions"}>
            <Link className={"add-button ripple"} to={"/create"}>
                Add Expense
                </Link>
                </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);