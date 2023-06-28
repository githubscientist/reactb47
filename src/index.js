import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';

// parameters = current state of the application and an action
// returns: new state of the application
// const counterReducer = (state, action) => {
//     if (action.type == 'INCREMENT') {
//         return state + 1;
//     } else if (action.type == 'DECREMENT') {
//         return state - 1;
//     } else if (action.type == 'ZERO') {
//         return 0;
//     }
//     return state;
// }

// define the reducer function
// provide: current state and an action
// return: new state
const counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
}

// create a new store
const store = createStore(counterReducer);

store.subscribe(() => {
    const storeNow = store.getState();
    console.log(storeNow);
})

// get the current state from store

// perform actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ZERO' });
store.dispatch({ type: 'DECREMENT' });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);