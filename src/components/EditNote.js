import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditNote() {
    const { id } = useParams();
    const [notes, setNotes] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [note, setNote] = useState(null);
    const [content, setContent] = useState('');
    const [important, setImportant] = useState(false);

    // get all the id's and load them to the drop down
    useEffect(() => {
        fetchNotes();
    }, []);

    // useEffect(() => {
    //     const selectedNote = notes.find((note) => note.id == selectedId);
    //     if (selectedNote) {
    //         setNote(selectedNote);
    //         setContent(selectedNote.content);
    //         setImportant(selectedNote.important);
    //     }
    // }, [selectedId, notes]);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/notes/${id}`);
            // console.log(response.data);
            // setNotes(response.data);
            setContent(response.data.content);
            setImportant(response.data.important);
        } catch (error) {
            console.error('Error fetching note:', error);
        }
    }

    const handleSelectChange = (event) => {
        const id = parseInt(event.target.value);
        setSelectedId(id);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:3001/notes/${id}`, {
                ...note,
                content,
                important: important == 'true'
            });
        } catch (error) {
            console.error('Error updating note:', error);
        }
    }

  return (
      <div>
          <h1>Edit Note</h1>
          {
            (
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
                    <button type='submit'>Update Note</button>
                </form>
              )
          }
    </div>
  )
}

export default EditNote;