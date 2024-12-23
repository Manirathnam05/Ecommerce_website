import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Contexted from './compounent/Context/Contexted.jsx';
import ErrorBoundary from './compounent/ErrorBoundary';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ErrorBoundary>
<Contexted>
<App />
</Contexted>
</ErrorBoundary>
</BrowserRouter>
)
