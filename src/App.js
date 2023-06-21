// props drilling
import React from 'react';

function GrandChildComponent(props) {
  return (
    <div>
      <h3>GrandChildComponent</h3>
      <p>{ props.message }</p>
    </div>
  )
}

function ChildComponent(props) {
  const message = 'Hello, GrandChild!';
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.message}</p>
      <GrandChildComponent message={message} />
    </div>
  )
}

function App() {

  // parent component data
  const message = 'Hello, Child!';

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={ message } />
    </div>
  )
}

export default App;