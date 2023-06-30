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
    };

    return (
        <div>
            {
                state.map((item, index) => (
                    <div key={index}>
                        {item.content}<br />
                        has {item.votes} <button onClick={() => updateVote(item.id)}>vote</button>
                    </div>
                ))
            }
        </div>
    )
}

export default App;