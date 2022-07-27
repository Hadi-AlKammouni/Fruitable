import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GroceryProvider from './context/grocery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GroceryProvider><App /></GroceryProvider>);