import {createStore} from 'redux'

const incrementCount = (incrementBy = 1) =>({
    type: 'INCREMENT',
    incrementBy
});

// passing object

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const set = ({count}) =>({
    type: 'SET',
    count
});

const reset = () =>({
    type: 'RESET'
});

const countReducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount(69));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 64}));
store.dispatch(reset());
store.dispatch(set({count: 64}));






//console.log(store.getState());

/*
store.dispatch(
    {
        type: 'DECREMENT'
    }
);

store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 68
    }
);

//console.log(store.getState());

store.dispatch(
    {
        type: 'RESET'
    }
);

//console.log(store.getState());

store.dispatch(
    {
        type: 'INCREMENT'
    }
);

store.dispatch(
    {
        type: 'INCREMENT'
    }
);

store.dispatch(
    {
        type: 'INCREMENT'
    }
);

store.dispatch(
    {
        type: 'RESET'
    }
);
store.dispatch(
    {
        type: 'SET',
        count: 101
    }
);*/
