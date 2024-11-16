import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct relative to the current file
import { AuthProvider } from './context/AuthContext'; // Make sure 'AuthContext' is in the correct path
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
