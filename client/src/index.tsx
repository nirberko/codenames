import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import App from './App';

axios.interceptors.request.use(function (config) {
  let request = config;
  request.url = `${process.env.REACT_APP_API_URL}${config.url}`;
  return request;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);