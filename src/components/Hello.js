// import React, { Component } from 'react';

// class Hello extends Component {
//   render() {
//     return (
//       <div>Hello World!</div>
//     )
//   }
// }

// export default Hello;

import React from 'react';

function Hello(props) {
  return (
      <div>Hello { props.name }!</div>
  )
}

export default Hello;