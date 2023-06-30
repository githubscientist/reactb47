import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const updateVote = (id) => {
        dispatch({
            type: 'INCR_VOTE',
            payload: {
                id
            }
        });
    }

    const deleteVote = (id) => {
        dispatch({
            type: 'DEL_VOTE',
            payload: {
                id
            }
        });
    }

    const addVote = (event) => {
        event.preventDefault();

        const content = event.target.anecdote.value;

        dispatch({
            type: 'NEW_VOTE',
            payload: {
                id: state.length + 1,
                content,
                votes: 0
            }
        });
    }

    return (
        <div>
            {
                state.map((item, index) => (
                    <div key={index} style={{margin: '5px'}}>
                        {item.content}<br />
                        has {item.votes} <button onClick={() => updateVote(item.id)}>vote</button>
                        <button onClick={() => deleteVote(item.id)}>delete</button>
                    </div>
                ))
            }

            <div style={{marginTop: '10px'}}>
                <form onSubmit={addVote}>
                    <input placeholder='new anecdote...' name='anecdote' />
                    <button type='submit'>add</button>
                </form>
            </div>
        </div>
    )
}

export default App;