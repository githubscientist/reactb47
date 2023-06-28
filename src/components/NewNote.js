import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';

const NewNote = () => {

    const dispatch = useDispatch();

    const addNote = (event) => {
        event.preventDefault();
        const content = event.target.note.value;
        dispatch(createNote(content));
        event.target.note.value = '';
        event.target.note.focus();
    }

    return (
        <form onSubmit={addNote}>
            <input name='note' placeholder='type a new note...'/>
            <button type='submit'>add</button>
        </form>
    )
}

export default NewNote;