// function App() {
//   // javascript
//   // console.log('hello from component');

//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   console.log(now, a + b);

//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function Hello(props) {
//   // console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name}, you are { props.age } years old</p>
//     </div>
//   )
// }

// function App() {

//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Sathish' age={ 10 + 20 } />
//       <Hello name='Krish' age={ age } />
//     </div>
//   )
// }

// export default App;

// day3 - React

// Working with array lists

// import React from 'react'; // not necessary from React 17

// function App(props) {

//   const { notes } = props;

//   // console.log(notes);

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//         <li>{notes[3].content}</li>
//         <li>{notes[4].content}</li>
//       </ul>
//     </div>
//   )
// }

// export default App;

// import React from 'react'; // not necessary from React 17

// function App(props) {

//   const { notes } = props;

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <li key={ note.id }>{note.content}</li>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App;

// import React from 'react'; // not necessary from React 17

// function Note({ note }) {
//   // ★
//   if (note.important) {
//     return (
//       <li>{note.content} ★</li>
//     )
//   } 
//   return (
//     <li>{note.content}</li>
//   )
// }

// function App({notes}) {

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App;

// import React from 'react'; // not necessary from React 17

// function Note({ note }) {
//   // ★
//   // if (note.important) {
//   //   return (
//   //     <li>{note.content} ★</li>
//   //   )
//   // }
//   // return (
//   //   <li>{note.content}</li>
//   // )
  
//   return (
//     <li>
//       {note.important ? note.content + ' ★' : note.content}
//     </li>
//   )
// }

// function App({notes}) {

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App;

// import React from 'react'; // not necessary from React 17

// function Note({ note }) {
//   // ★
//   // if (note.important) {
//   //   return (
//   //     <li>{note.content} ★</li>
//   //   )
//   // }
//   // return (
//   //   <li>{note.content}</li>
//   // )
  
//   return (
//     <li>
//       {/* {note.important ? note.content + ' ★' : note.content} */}
//       {note.content} {note.important && ' ★' }
//     </li>
//   )
// }

// function App({notes}) {

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App;

// event handling

// import React from 'react';

// function Note({ note }) {
  
//   return (
//     <li>
//       {note.content} {note.important && ' ★' }
//     </li>
//   )
// }

// function App({ notes }) {
  
//   const addNote = (event) => {
//     event.preventDefault();
//     // console.log(event);
//     console.log('button clicked', event.target);
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>

//       <form onSubmit={addNote}>
//         <input />
//         <button type='submit'>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// import React from 'react';

// function Note({ note }) {
  
//   return (
//     <li>
//       {note.content} {note.important && ' ★' }
//     </li>
//   )
// }

// function App({ notes }) {
  
//   const addNote = (event) => {
//     event.preventDefault();
//     // console.log(event);
//     console.log('button clicked', event.target);
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>

//       <form>
//         <input />
//         <button onClick={() => console.log('button clicked')}>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// import React from 'react';

// function Note({ note }) {
  
//   return (
//     <li>
//       {note.content} {note.important && ' ★' }
//     </li>
//   )
// }

// function App({ notes }) {
  
//   const addNote = (event) => {
//     event.preventDefault();
//     // console.log(event);
//     console.log('button clicked');
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>

//       <form>
//         <input />
//         <button onClick={addNote}>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// Functional Component
// import React from 'react';

// function App() {
//   return (
//     <div>Hello, World!</div>
//   )
// }

// export default App;

// import { Component } from "react";

// // Class Component
// class App extends Component {
//   render() {
//     return <div>Hello, World!</div>
//   }
// }

// export default App;

// passing props in functional component

// import React from 'react';

// function Hello(props) {
//   // console.log(props);

//   return (
//     <div>Hello, { props.name }!</div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Hello name={ 'Krish' } />
//     </div>
//   )
// }

// export default App;


// passing props in class component

// import { Component } from "react";

// class Hello extends Component {

//   render() {

//     // console.log(this.props);
//     const { name } = this.props;

//     return (
//       // <div>Hello, {this.props.name}!</div>
//       <div>Hello, {name}!</div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello name={ 'Krish' } />
//       </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from 'react';

// export class App extends Component {

//   // componentDidMount: called after the component has been rendered to the DOM
//   componentDidMount() {
//     console.log('component mounted');
//   }

//   componentDidUpdate() {
//     // invoked after the component has been updated in the DOM
//     // state or prop changes
//   }

//   componentWillUnmount() {
//     // invoked just before the component is removed from the DOM
//     // releasing memory or resources
//     // detaching the events
//     // cancelling timers
//   }

//   render() {
//     return (
//       <div>Hello, World!</div>
//     )
//   }
// }

// export default App;

// stateful components

// import React, { Component } from 'react';

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handlePlusClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   handleMinusClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   }

//   handleZeroClick = () => {
//     this.setState((prevState) => ({
//       count: 0,
//     }));
//   }


//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count} </p>
//         <button onClick={this.handlePlusClick}>plus</button>
//         <button onClick={this.handleMinusClick}>minus</button>
//         <button onClick={this.handleZeroClick}>zero</button>
//       </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import Hello from './components/Hello';

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello />
//       </div>
//     )
//   }
// }

// export default App;

// useState hook
// functional - stateful component
// state changes triggers component re-rendering

// import React, { useState } from 'react';

// function App() {

//   const [counter, setCounter] = useState(0);

//   setTimeout(
//     () => setCounter(counter + 1), 1000
//   );

//   console.log('rendering...', counter);

//   return (
//     <div>{counter}</div>
//   )
// }

// export default App;

// import React, { useState } from 'react';

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// function Button(props) {
//   return (
//     <button onClick={props.handleClick}>{props.text}</button>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handlePlusClick = () => setCounter(counter + 1);

//   const handleMinusClick = () => setCounter(counter - 1);

//   const handleZeroClick = () => setCounter(0);

//   return (
//     <div>
//       {/* display a counter state */}
//       <Display counter={counter} />
//       <Button text='plus' handleClick={ handlePlusClick } />
//       <Button text='minus' handleClick={ handleMinusClick } />
//       <Button text='zero' handleClick={ handleZeroClick } />
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react';

// function App() {

//   const [isButtonEnabled, setIsButtonEnabled] = useState({
//     button1: false,
//     button2: false,
//   });
//   const [cartData, setCartData] = useState([]);

//   const handleClick = (buttonName) => {
//     setCartData([...cartData, 12]);
//     setIsButtonEnabled((prevState) => ({
//       ...prevState,
//       [buttonName]: true
//     }));
//   }

//   console.log(cartData);

//   return (
//     <div>
//       <input />
//       {/* <button >Toggle</button> */}
//       <button disabled={isButtonEnabled.button1} onClick={() => handleClick('button1')}>Button</button>
//       <button disabled={ isButtonEnabled.button2 } onClick={() => handleClick('button2')}>Button</button>
//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   // runs only one time
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   // console.log(data);

//   return (
//     <div>
//       <h1>API DATA</h1>
//       {
//         data ? (
//           <ul>
//           {
//             data.map(item => <li key={item.id}>{ item.title }</li>)
//           }
//         </ul>
//         ) : (
//             <p>Loading data...</p>
//         )
//       }
//     </div>
//   )
// }

// export default App;

import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const incrementHandler = () => {
    setCount(count + 1);
    // document.title = `Count: ${count}`;
  }

  // document.title = `Count: ${count}`;

  return (
    <div>
      <h1>Document Title Updater</h1>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  )
}

export default App;