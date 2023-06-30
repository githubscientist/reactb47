import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch({type: 'GOOD'})}>good</button>
                <button onClick={() => dispatch({ type: 'OK'})}>ok</button>
                <button onClick={() => dispatch({type: 'BAD'})}>bad</button>
                <button onClick={() => dispatch({type: 'RESET'})}>reset stats</button>
            </div>

            <div>
                good { state.good }
            </div>

            <div>
                ok { state.ok }
            </div>

            <div>
                bad { state.bad }
            </div>
        </div>
    )
}

export default App;