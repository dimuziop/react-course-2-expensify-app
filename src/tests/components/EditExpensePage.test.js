import React from 'react';
import { shallow } from 'enzyme';
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, history, wrapper, removeExpense;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage onRemove={removeExpense} editExpense={editExpense} history={history} expense={expenses[1]}/>);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle deleteExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});

