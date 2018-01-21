import React from 'react';
import {startRemoveExpense} from "../actions/expenses";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
        <Link className={"list-item"} to={`/edit/${id}`}>

        <div>
            <h3 className={"list-item__title"}>{description}</h3>
            <span className={"list-item__subtitle"}>{moment(createdAt).format('d/MM/YYYY')}</span>
        </div>
            <div>
                <h3 className={"list-item__data"}>{numeral(amount/100).format('$0,0.00')}</h3>
                <button className={"delete-button ripple"} onClick={() => (dispatch(startRemoveExpense({id: id})))}>Delete</button>
            </div>

        </Link>
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
