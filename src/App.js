/*
  Session task – profile name changes

  Implement a React component that allows users to change their profile name using the Context API. 
  - the component should consist of two parts: a parent component called App and
  - a child component called Profile.

  The App component should:
    - Import necessary dependencies from the React library
    - Create a context object using the createContext function from React.
    - Define a state variable called profileName using the useState hook and set its initial value to an empty string.
    - Wrap the Profile component with the context provider component, passing the profileName state and its corresponding setter function as the vallue prop.

  The Profile component should:
    - Import necessary dependencies from the React library
    - Use the useContext hook to access the profileName state variable and its setter function from the context.
    - Render an input field where users can enter their profile name, with its value set to the profileName state variable.
    - Add an onChange event handler to the input field that updates the profileName state variable with the entered value using the setter function.
    - Make sure to export the App component as the default import.
*/

import React from 'react';

function App() {
  return (
    <div>App</div>
  )
}

export default App;