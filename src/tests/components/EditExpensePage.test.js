import React from 'react';
import { shallow } from 'enzyme';
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, history, wrapper, startRemoveExpense;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage onRemove={startRemoveExpense} editExpense={editExpense} history={history} expense={expenses[1]}/>);
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
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});

