import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import Category from './components/Category';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Category />

  </React.StrictMode>,
  document.getElementById('root')
);