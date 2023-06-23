import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateForm() {
    return (
        <div>
          <form>
            <input
            placeholder='type a note...' 
            /> <br /><br />
            
            <label form='dropdownNoteImportant'>Is Important: </label>
            <select
            id='dropdownNoteImportant'>
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

function EditNote() {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    // get the id's from backend
    useEffect(() => {
        axios
            .get('http://localhost:3001/notes/')
            .then(response => setOptions(response.data));
    }, []);

    let selectHandler = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <h1>Edit Notes</h1>

            <label>
                Select an ID to Edit 
                <select onChange={selectHandler} value={selectedOption}>
                    <option value=''>Select an Option</option>
                    {
                        options.map(option => (
                            <option key={option.id}>{option.id}</option>
                        ))
                    }
                </select>  
            </label>
            <br /><br />
            {selectedOption && <UpdateForm />}
      </div>
  )
}

export default EditNote;