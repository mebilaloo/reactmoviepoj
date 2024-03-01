import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
