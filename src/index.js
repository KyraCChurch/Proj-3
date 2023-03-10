import './styles.css'
import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
// import React from 'react';
import App from './App'

// import { BrowserRouter as  Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)