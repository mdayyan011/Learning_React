import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Employee from './Employee';
import MyCart from './MyCart';
import Compo from './Compo';
ReactDOM.render(<Employee />, document.getElementById('root'), () =>
  console.log('Rendered')
);
