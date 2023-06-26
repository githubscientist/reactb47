import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DeleteNote() {

    const [notes, setNotes] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [note, setNote] = useState(null);
    const [content, setContent] = useState('');
    const [important, setImportant] = useState(false);

    // get all the id's and load them to the drop down
    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        const selectedNote = notes.find((note) => note.id == selectedId);
        if (selectedNote) {
            setNote(selectedNote);
            setContent(selectedNote.content);
            setImportant(selectedNote.important);
        }
    }, [selectedId, notes]);

    const fetchNotes = async () => {
        const response = await axios.get('http://localhost:3001/notes/');
        // console.log(response.data);
        setNotes(response.data);
    }

    const handleSelectChange = (event) => {
        const id = parseInt(event.target.value);
        setSelectedId(id);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.delete(`http://localhost:3001/notes/${selectedId}`);
            setContent('');
            setImportant('--Select--');
            fetchNotes();
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    }

  return (
      <div>
          <h1>Delete Note</h1>
          <select onChange={handleSelectChange} value={selectedId}>
              <option>Select a note</option>
              {
                  notes.map((note) => (
                      <option key={note.id}>{note.id}</option>
                  ))
              }
          </select>
          <br /><br />
          {
              selectedId && (
                <form onSubmit={handleSubmit}>
                    <input value={content} onChange={(event) => setContent(event.target.value)}
                    placeholder='type a note...' 
                    /> <br /><br />
                    
                      <label>Is Important:
                        <select id='drop' value={important} onChange={(event) => setImportant(event.target.value)}>
                            <option>--Select--</option>
                            <option>true</option>
                            <option>false</option>
                        </select>
                      </label>
                    
                    <br /><br />
                    <button type='submit'>Delete Note</button>
                </form>
              )
          }
    </div>
  )
}

export default DeleteNote;