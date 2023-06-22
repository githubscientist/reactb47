// useRef - hook: to create a mutable reference to an element or a value that persists across render cycles.
// Example 1: focus the input text book on click of a button

// import React, { useRef } from 'react';

// function App() {

//   const inputRef = useRef(null);

//   let handleButtonClick = () => {
//     // handle the input text
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input type='text' ref={inputRef} />
//       <button onClick={handleButtonClick}>Focus Input</button>
//     </div>
//   )
// }

// export default App;

// Example 2: 
// import React, { useRef, useState } from 'react';

// function App() {

//   const inputRef = useRef(null);
//   const [text, setText] = useState('no text');

//   let handleButtonClick = () => {
//     // get the value of the input text box
//     let value = inputRef.current.value;
//     setText(value);
//     console.log(inputRef);
//   }

//   return (
//     <div>
//       <input type='text' ref={inputRef} />
//       <button onClick={handleButtonClick}>Get Text</button>

//       <p>Entered Text: { text }</p>
//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useRef } from 'react';

// function App() {

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <input type='text' ref={inputRef} />
//     </div>
//   )
// }

// export default App;

// import React, { useRef, useState } from 'react';

// function App() {

//   const [count, setCount] = useState(0);
//   const previousCountRef = useRef(null);

//   let handleIncrement = () => {
//     console.log(previousCountRef, count);
//     previousCountRef.current = count;
//     console.log(previousCountRef, count);
//     setCount((prevCount) => prevCount + 1);
//     console.log(previousCountRef, count);
//   }

//   return (
//     <div>
//       <p>Current Count: { count } </p>
//       <p>Previous Count: { previousCountRef.current} </p>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useRef } from 'react';

// function App() {

//   const sharedRef = useRef(null);

//   useEffect(() => {
//     console.log(sharedRef);
//   }, []);

//   return (
//     <div>
//       <input type='text' ref={sharedRef} />
//       <button ref={sharedRef}>Click</button>
//       <span ref={sharedRef}>useRef demonstration</span>
//     </div>
//   )
// }

// export default App;

// useEffect examples
// without dependency list
// import React, { useEffect } from 'react';

// function App() {

//   // this effect runs once, after the component mounts
//   useEffect(() => {
//     console.log('component mounted');
//   }, []);

//   return (
//     <div>
//       App Component
//     </div>
//   )
// }

// export default App;

// with a single dependency

// import React, { useEffect, useState } from 'react';

// function App() {

//   const [count, setCount] = useState(0);

//   // runs every time
//   useEffect(() => {
//     console.log('count: ', count);
//   }, [count]);

//   let buttonClickHandler = () => {
//     // setCount(count + 1);
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={buttonClickHandler}>Increment</button>
//     </div>
//   )
// }

// export default App;


// useReducer hook : complex state management (multiple actions or transitions)
// import React, { useState } from 'react';

// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: { count }</p>
//       <button onClick={() => setCount(count+1)}>Increment</button>
//       <button onClick={() => setCount(count-1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default App;

// import React, { useReducer, useState } from 'react';

// // set an initial state
// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       throw new Error();
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: { state.count  }</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </div>
//   )
// }

// export default App;

// toggle button
// import React, { useReducer } from 'react';

// const initialState = { isActive: false };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'toggle':
//       return { isActive: !state.isActive };
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Active: { state.isActive ? 'Yes': 'No' } </p>
//       <button onClick={() => dispatch({type: 'toggle'})}>Toggle</button>
//     </div>
//   )
// }

// export default App;