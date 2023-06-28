import { useDispatch } from "react-redux";

const toggleImportance = (id) => {
    const actionObject = {
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id
        }
    };
    return actionObject;
}

const Note = ({ id, content, important }) => {

    const dispatch = useDispatch();

    const toggleHandler = (id) => {
        dispatch(toggleImportance(id));
    }

    return (
        <li key={id} style={{marginBottom: '10px'}}>
            {
                important ? <strong>{content}</strong> : content
            }
            <button
                onClick={() => toggleHandler(id)}
                style={{ marginLeft: '10px' }} >Toggle Importance</button>
        </li>
    )
}

export default Note;