import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CreateNote from './components/CreateNote';
import ReadNotes from './components/ReadNotes';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';

function App() {
  
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');

  const padding = {
    padding: 15
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes/')
      .then(response => setNotes(response.data));
  });

  const newNoteContentRef = useRef(null);

  let addNote = (event) => {
    event.preventDefault();
    
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant==='true',
    }

    axios
      .post('http://localhost:3001/notes/', noteObject)
      // .then(response => console.log(response));
    
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
  }

  return (
    <Router>
      
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/read">Read Notes</Link>
        <Link style={padding} to="/create">Create Notes</Link>
        <Link style={padding} to="/edit">Edit Note</Link>
        <Link style={padding} to="/delete">Delete Note</Link>
      </div>

      <Routes>
        <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={notes} />} />
        <Route path='/create' element={<CreateNote addNote={addNote} newNoteContent={newNoteContent} handleNoteChange={handleNoteChange} newNoteContentRef={newNoteContentRef} handleSelectChange={handleSelectChange} newNoteImportant={newNoteImportant} />} />
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<EditNote />} />
        <Route path='/delete' element={<DeleteNote />} />
        <Route path='/read/edit/:id' element={<EditNote />} />
      </Routes>
    </Router>
  )
}

export default App;