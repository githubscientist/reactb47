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
  const [selectedID, setSelectedID] = useState('');
  const [content, setContent] = useState('');
  const [important, setImportant] = useState('--Select--');

  // get the data
  useEffect(() => {
    setNotes(props.notes);
  }, []);

  useEffect(() => {
    const noteObject = notes.find(note => note.id == selectedID);
    if (noteObject) {
      setContent(noteObject.content);
      setImportant(noteObject.important);
    }
  }, [selectedID, notes]);

  // create a reference for the first input text box
  const newNoteContentRef = useRef(null);


  // define the addNote method
  let addNote = (event) => {
    event.preventDefault();
    
    // create a new object
    let noteObject = {
      id: selectedID,
      content: content,
      important: important==='true',
    }

    // add the new object to the notes state
    // setNotes(notes.concat(noteObject));

    // setNotes([noteObject, ...notes]);
    // let refObject = notes.find(note => note.id == selectedID);
    // refObject.content = content;
    // refObject.important = important;

    let changeNotes = [...notes];

    for (var index = 0; index < changeNotes.length; index++){
      if (changeNotes[index].id == selectedID) {
        break;
      }
    }

    changeNotes[index] = noteObject;

    setNotes([...changeNotes]);

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
        <select onChange={(event) => setSelectedID(event.target.value)} value={selectedID}>
          <option>Select an ID</option>
          {
            notes.map(note => (
              <option key={note.id}>{note.id}</option>
            ))
          }
        </select>
        <br /><br />
        <input
          value={content}
          onChange={(event) => setContent(event.target.value)}
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
          onChange={(event) => setImportant(event.target.value)}
          value={important}>
          <option>--Select--</option>
          <option>true</option>
          <option>false</option>
        </select>
        <br /><br />
        <button type='submit'>Update Note</button>
      </form>
    </div>
  )
}

export default App;