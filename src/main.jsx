// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the App component and the index.css stylesheet
import App from './App';
import './index.css';

// Use ReactDOM to render the App component to the root element of the HTML document
// wrapped in a <React.StrictMode> element for additional checks and warnings
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
