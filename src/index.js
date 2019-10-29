import React from 'react'; // es6 syntax for importing modules
import ReactDOM from 'react-dom';

// each component will be stored in a separate js 
// file that has the same name as the component
import App from './App.js';

ReactDOM.render(<App title='Film App'/> , document.getElementById('react-container'));