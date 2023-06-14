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

import React, { Component } from 'react';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handlePlusClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleMinusClick = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  handleZeroClick = () => {
    this.setState((prevState) => ({
      count: 0,
    }));
  }


  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
        <button onClick={this.handlePlusClick}>plus</button>
        <button onClick={this.handleMinusClick}>minus</button>
        <button onClick={this.handleZeroClick}>zero</button>
      </div>
    )
  }
}

export default App;