import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MyProvider } from './assets/components/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>
);