import React from 'react';
import {removeExpense} from "../actions/expenses";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{numeral(amount/100).format('$0,0.00')} - {moment(createdAt).format('d/MM/YYYY')} </p>
        <button onClick={() => (dispatch(removeExpense({id: id})))}>Delete</button>
    </div>
);


export default connect()(ExpenseListItem);
/*
export default (props) => {

    const redered = props.expenses.map((expense) => {
        return (
            <div>
                <h3>{expense.description}</h3>
                <p>{expense.description} -- Amount: {expense.amount}</p>
            </div>
        )
    });
    return redered;
}*/
