import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import DefaultErrorBoundary from './defaultErrorBoundary';
import '@babel/polyfill';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
