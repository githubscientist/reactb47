import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import unicafeReducer from './reducers/unicafeReducer';
import { Provider } from 'react-redux';

// create a store
// step: 3 create a store
const store = createStore(unicafeReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);