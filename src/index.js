import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import ElevatorWrapper from './Elevator';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

  ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
  );
  ReactDOM.render(
    <ElevatorWrapper />,
    document.getElementById('elevator')
  );
