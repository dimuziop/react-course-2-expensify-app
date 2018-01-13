import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render without total', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render with total', () => {
    const wrapper = shallow(<ExpensesSummary expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
});