// step: 1 define a initial state
const initialState = [
    {
        id: 1,
        content: 'But it works in my machine...',
        votes: 0
    },
    {
        id: 2,
        content: 'If it hurts, do it more often',
        votes: 0
    },
    {
        id: 3,
        content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0
    },
    {
        id: 4,
        content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the next 10 percent of the development time',
        votes: 0
    },
    {
        id: 5,
        content: 'Adding manpower to a late software project makes it later!',
        votes: 0
    }
];

// step: 2 define a reducer function
const anecdoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCR_VOTE':
            const id = action.payload.id;
            const anecdote = state.find(object => object.id == id);
            const changedAnecdote = {
                ...anecdote,
                votes: anecdote.votes + 1
            };

            return state.map(anecdote => anecdote.id == id ? changedAnecdote : anecdote);


        default:
            return state;
    }
}

export default anecdoteReducer;