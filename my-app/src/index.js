// 1. index.html -> directly
// 2. external .js -> traditional js use
// 3. React

import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   //  content to show,
//   // where to show,
//   // callback
// )

//1. external div element
// 2. react fragment : <> </>
ReactDOM.render(
  <>
    <h1>I am learning React Js</h1>

    <h2>Today is day 1</h2>
    <h2>Today is day 1</h2>
    <h2>Today is day 1</h2>
    <h2>Today is day 1</h2>
    <h2>Today is day 1</h2>
  </>,
  document.getElementById('root')
);
