import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state);

    return (
        <div>
            <div>
                {counter}
            </div>

            <button onClick={e => dispatch({ type: 'INCREMENT' })}>plus</button>
            <button onClick={e => dispatch({ type: 'DECREMENT' })}>minus</button>
            <button onClick={e => dispatch({ type: 'ZERO' })}>zero</button>
        </div>
    )
}

export default App;