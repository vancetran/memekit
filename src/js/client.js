import React from 'react';
import ReactDOM from 'react-dom';

import scratchpad from './scratchpad.js';

class Layout extends React.Component {
  render(){
    return(
      <h1>Howdy duder!</h1>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
