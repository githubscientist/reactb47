import React from 'react';
import { useSelector } from 'react-redux';
import Note from './components/Note';

const App = () => {

    const notes = useSelector((state) => state);

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {
                    notes.map(note =>
                            <Note 
                                key={note.id}
                                id={note.id}
                                content={note.content}
                                important={note.important}
                            />
                    )
                }
            </ul>
        </div>
    )
}

export default App;