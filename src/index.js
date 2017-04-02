import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Building from './Building';
import Panel from './Panel';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <Building />,
  document.getElementById('building')
);
ReactDOM.render(
  <Panel />,
  document.getElementById('panel')
);
