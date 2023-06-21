import React, { createContext, useContext, useState } from 'react';

// create a context
const MessageContext = createContext();
const ChildMessageContext = createContext();

function GrandChildComponent() {
  const message = useContext(ChildMessageContext);
  return (
    <div>
      <h3>GrandChildComponent</h3>
      <p>{ message }</p>
    </div>
  )
}

function ChildComponent() {

  // use the context data
  const message = useContext(MessageContext);
  const childMessage = 'hello from child';

  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
      <ChildMessageContext.Provider value={childMessage}>
        <GrandChildComponent />
      </ChildMessageContext.Provider>
    </div>
  )
}

function App() {
  const [message, setMessage] = useState('Hello from App');
  return (
    <div>
      <h1>Parent Component</h1>
      <MessageContext.Provider value={message}>
        <ChildComponent />
      </MessageContext.Provider>
    </div>
  )
}

export default App;