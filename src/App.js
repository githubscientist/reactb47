import React from 'react';
import { createStore } from 'redux';

// define the reducer
const noteReducer = (state = [], action) => {
    if (action.type === 'NEW_NOTE') {
        state.push(action.payload);
        return state;
    }
    return state;
}

// create a store
const store = createStore(noteReducer);

// dispatch actions
store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: 'the app state is in redux store',
        important: true,
        id: 1
    }
});

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: 'state changes are made with actions',
        important: false,
        id: 2
    }
});

const App = () => {

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {
                    store.getState().map(note =>
                        <li key={note.id}>
                            {note.content} <strong>{note.important ? 'important' : ''}</strong>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default App;