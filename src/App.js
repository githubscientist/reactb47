// without React Router
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Notes App</h2>
    </div>
  )
}

function Notes() {
  return (
    <div>
      <h2>Notes Component</h2>
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
        <Route path='/users' element={ <Users /> } />
        <Route path='/notes' element={ <Notes /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App;