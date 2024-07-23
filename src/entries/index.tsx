import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import '../css/style.css';

function createApp(elementName: string) {
  return function () {
    ReactDOM.createRoot(document.getElementById(elementName)!).render(
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>,
    );
  };
}

export const mainApp = createApp('root');
