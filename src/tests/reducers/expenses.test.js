import moment from 'moment';
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expenses by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2], expenses[3], expenses[4]])
});

test('should not remove expenses if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: 8
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should update an expense ', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: "1",
        updates: {
            id: "1",
            description: 'updateTestCase'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toEqual('updateTestCase')
});

test('should not update an expense if id not found', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: "1500",
        updates: {
            id: "1",
            description: 'updateTestCase'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense ', ()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '109',
            description: 'createTestCase',
            amount: 1500,
            createdAt: 5
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[5]).toEqual({
        id: '109',
        description: 'createTestCase',
        amount: 1500,
        createdAt: 5
    })
});