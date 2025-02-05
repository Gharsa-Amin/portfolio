import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.js'


const rootElement = document.getElementById('root')!; 

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);