import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import anecdoteReducer from './reducers/anecdoteReducer';
import { Provider } from 'react-redux';

// create a store
// step: 3 create a store
const store = createStore(anecdoteReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);