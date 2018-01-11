import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate:  moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case'SET_START_DATE':
            return {...state, startDate: action.date};
        case'SET_END_DATE':
            return {...state, endDate: action.date};
        case'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        default:
            return state
    }
};
