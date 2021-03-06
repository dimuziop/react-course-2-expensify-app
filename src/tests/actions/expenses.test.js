import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense, removeExpense, editExpense, startAddExpense, setExpenses,
    startSetExpenses, startRemoveExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from '../../firebase/firebase';

const mockStore = configureStore([thunk]);

beforeEach((done) => {
   const expensesData = {};
   expenses.forEach(({id, description, note, amount, createdAt}) => {
       expensesData[id] = {description, note, amount, createdAt};
   });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expenses action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    })
});

test('should setup remove expenses from firebase', (done) => {
    const store = mockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = mockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = mockStore({});
    const expenseDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

test('should setup add expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expense from database', (done) => {
    const store = mockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

/*test('should setup add expenses action object with default values', () => {
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
});*/
