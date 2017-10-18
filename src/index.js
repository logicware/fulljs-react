import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


ReactDOM.render(
  <App initialTasks={[]}/>,
  document.getElementById('root')
);


/*
setTimeout(() => {
  ReactDOM.render(
    <h2>Component was Un-mounted</h2>,
    document.getElementById('root')
  );

}, 3000);
*/

/*
ReactDOM.render(
  <h2 style={{color}} className="text-center">
    Hello React with JSX! - { color }
  </h2>,
  document.getElementById('root')
);
*/


/*
ReactDOM.render(
  React.createElement(
    'h2',
    null,
    'Hello React'
  ),
  document.getElementById('root')
);
*/
