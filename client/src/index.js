// NOTE: the mini.css import path for our css framework that we chose will go here

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
