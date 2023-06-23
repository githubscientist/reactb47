import React from 'react'

function CreateNote({addNote, newNoteContent, handleNoteChange, newNoteContentRef, handleSelectChange, newNoteImportant}) {
  return (
      <div>
          <h1>Create Notes</h1>
          <form onSubmit={addNote}>
            <input
            value={newNoteContent}
            onChange={handleNoteChange}
            placeholder='type a note...' 
            ref={newNoteContentRef}
            /> <br /><br />
            
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

export default CreateNote;