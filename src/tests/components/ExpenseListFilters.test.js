import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import expenses from "../fixtures/expenses";
import {filters, altFilters} from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
        filters = {filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate = {setStartDate}
        setEndDate = {setStartDate}
    />);

});

test('should render expense ExpenseList Filter correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

test('should render expense ExpenseListFilter eith alt data correctly', () => {
    wrapper.setProps({
        filter:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// todo: make the rest of test who describes the methods