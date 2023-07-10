import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AdminApp } from './AdminApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminApp />
    </BrowserRouter>
  </React.StrictMode>,
)
