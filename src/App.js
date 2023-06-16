// without React Router
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Notes App</h2>
    </div>
  )
}

function Note({notes}) {
  const id = useParams().id;
  const note = notes.find(n => n.id === Number(id));

  return (
    <div>
      <h2>{note.content}</h2>
    </div>
  )
}

function Notes({ notes }) {
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {
          notes.map(note => 
            <li key={note.id}><Link to={`/notes/${note.id}`}>{ note.content }</Link></li>
          )
        }
      </ul>
    </div>
  )
}

function Users() {
  return (
    <div>
      <h2>Users App</h2>
    </div>
  )
}

function App() {

  const notes = [
    {
      id: 1,
      content: 'Javascript'
    },
    {
      id: 2,
      content: 'ReactJS'
    },
    {
      id: 3,
      content: 'NodeJS'
    }
  ];

  const padding = {
    padding: 10
  };

  return (
    <Router>
      <div>
        <Link to='/' style={padding}>home</Link>
        <Link to='/notes' style={padding}>notes</Link>
        <Link to='/users' style={padding}>users</Link>
      </div>

      <Routes>
        <Route path='/notes/:id' element={ <Note notes={notes}/> } />
        <Route path='/users' element={ <Users /> } />
        <Route path='/notes' element={<Notes notes={notes} /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App;