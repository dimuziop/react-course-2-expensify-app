import {addExpense, removeExpense, editExpense} from "../../actions/expenses";

test('should setup remove expenses action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    })
});

test('should setup edit expenses action object', () => {
    const action = editExpense('123abc', {note: 'testCase', amount: 100, createdAt: 'now', description: 'testCase'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'testCase',
            amount: 100,
            createdAt: 'now',
            description: 'testCase'
        }
    })
});

test('should setup add expenses action object', () => {
    const expenseData = {
        description: 'testCase',
        note: 'testCase',
        amount: 100,
        createdAt: 'now'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expenses action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});
