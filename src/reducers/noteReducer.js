const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            // return state.concat(action.payload);
            return [...state, action.payload];
        case 'TOGGLE_IMPORTANCE':
            // find the id to toggle the importance
            // fetch the action payload id to update the importance
            const id = action.payload.id;

            // find the object to toggle
            const noteToChange = state.find(note => note.id === id);

            // toggle the importance field in noteToChange object
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }

            return state.map(note => 
                note.id === id ? changedNote : note
            )

        default:
            return state;
    }
}

const generateID = () => Number((Math.random() * 1000000).toFixed(0));

// action creators
export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content,
            important: false,
            id: generateID()
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id
        }
    }
}

export default noteReducer;