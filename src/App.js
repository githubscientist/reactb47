import React from 'react';
import { createNote, toggleImportanceOf } from './reducers/noteReducer';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

    const dispatch = useDispatch();
    const notes = useSelector(state => state);

    const addNote = (event) => {
        event.preventDefault();
        const content = event.target.note.value;
        dispatch(createNote(content));
        event.target.note.value = '';
        event.target.note.focus();
    }

    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id));
    }

    return (
        <div>
            <h1>Notes</h1>
            <form onSubmit={addNote}>
                <input name='note' placeholder='type a new note...'/>
                <button type='submit'>add</button>
            </form>
            <ul>
                {
                    notes.map(note =>
                        <li
                            key={note.id}
                            onClick={() => toggleImportance(note.id)}
                        >
                            {note.content} <strong>{note.important ? 'important' : ''}</strong>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default App;