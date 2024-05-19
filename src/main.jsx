import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes.jsx'
import './index.css'
import Home from './pages/Home/index.jsx'
import Header from './components/Header'
import './styles/global.sass'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
