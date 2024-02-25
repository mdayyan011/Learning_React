import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

let dayCount = 10;

ReactDOM.render(
  <div>
    <h1> Welcome to linkcode technologies</h1>
    <h3>Today is my day {dayCount} of learning react</h3>
  </div>,
  document.getElementById('root')
);
