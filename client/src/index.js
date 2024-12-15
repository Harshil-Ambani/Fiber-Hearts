import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the 'client' version from react-dom
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root

root.render(  // Use 'render' method of the root to render your app
  <Router>
    <App />
  </Router>
);