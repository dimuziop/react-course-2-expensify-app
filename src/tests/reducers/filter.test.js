import moment from 'moment';
import filtersReducer from '../../reducers/filter';



test('should set up default filter values', () => {
   const state = filtersReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual({
       text: '',
       sortBy: 'amount',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   })
});

test('should set up sort by amount filter values', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set up sort by to date filter values', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate:  undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});

test('should set up set text filter values', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate:  undefined
    };
    const action = {type: 'SET_TEXT_FILTER', text: 'TestText'};
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('TestText')
});

test('should set up set start date filter values', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate:  undefined
    };
    const date = moment(0);
    const action = {type: 'SET_START_DATE', date};
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(date)
});

test('should set up set end date filter values', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate:  undefined
    };
    const date = moment(0);
    const action = {type: 'SET_END_DATE', date};
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toBe(date)
});