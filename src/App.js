// A Simple Note taking Application
import React, { useEffect, useRef, useState } from 'react';

function Note({note}) {
  return (
    <li>{ note.content }</li>
  )
}

function App(props) {
  
  // define a state
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');

  // get the data
  useEffect(() => {
    setNotes(props.notes);
  }, []);

  // create a reference for the first input text box
  const newNoteContentRef = useRef(null);


  // define the addNote method
  let addNote = (event) => {
    event.preventDefault();
    
    // create a new object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant==='true',
    }

    // add the new object to the notes state
    setNotes(notes.concat(noteObject));

    // console.log(noteObject);

    // clear the input text box
    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
  }

  let handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  }

  let handleSelectChange = (event) => {
    setNewNoteImportant(event.target.value);
  }

  let handleStatusChange = (event) => {
    setShowStatus(event.target.value);
    // console.log(event.target.value);
  }

  let filterNotes = (notes, status) => {
    switch (status) {
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note => note.important === true);
      case 'nonimp':
        return notes.filter(note => note.important === false);
    }
  }

  const notesFiltered = filterNotes(notes, showStatus);

  return (
    <div>
      <h1>Notes</h1>

      <label>
        <input type='radio' name='filter' value="all" checked={ showStatus === 'all' } onChange={handleStatusChange} />
        Show All Notes
      </label>

      <label>
        <input type='radio' name='filter' value="imp" checked={ showStatus === 'imp' } onChange={handleStatusChange} />
        Show Important Notes
      </label>

      <label>
        <input type='radio' name='filter' value="nonimp" checked={ showStatus === 'nonimp' } onChange={handleStatusChange} />
        Show Non-Important Notes
      </label>

      <ul>
        {notesFiltered.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      {/* add a simple form for adding notes */}
      <form onSubmit={addNote}>
        <input
          value={newNoteContent}
          onChange={handleNoteChange}
          placeholder='type a note...' 
          ref={newNoteContentRef}
          /> <br /><br />
        {/* <input
          type='text'
          placeholder='enter true or false'
          value={newNoteImportant}
          onChange={(e) => setNewNoteImportant(e.target.value)} /> */}
        <label form='dropdownNoteImportant'>Is Important: </label>
        <select
          id='dropdownNoteImportant'
          onChange={handleSelectChange}
          value={newNoteImportant}>
          <option>--Select--</option>
          <option>true</option>
          <option>false</option>
        </select>
        <br /><br />
        <button type='submit'>Add New Note</button>
      </form>
    </div>
  )
}

export default App;