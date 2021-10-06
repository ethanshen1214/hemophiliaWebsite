/**
 * Copyright (c) 2021
 *
 * @summary Main entrance point for the app (created from react boilerplate code)
 * @author Ethan Shen <ethanshen1214@gmail.com>
 *
 * Created at     : 2021-07-12 
 * Last modified  : 2021-10-06
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
