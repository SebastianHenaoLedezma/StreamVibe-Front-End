import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserProvider } from './context/UserContext.jsx';
import './index.css';
import './styles/global.sass';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
