import React from 'react';
import { createStore } from 'redux';

// define the reducer
const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            // return state.concat(action.payload);
            return [...state, action.payload];
        case 'TOGGLE_IMPORTANCE':
            // find the id to toggle the importance
            // fetch the action payload id to update the importance
            const id = action.payload.id;

            // find the object to toggle
            const noteToChange = state.find(note => note.id === id);

            // toggle the importance field in noteToChange object
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }

            return state.map(note => 
                note.id === id ? changedNote : note
            )

        default:
            return state;
    }
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

store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    payload: {
        id: 1
    }
});

store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    payload: {
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