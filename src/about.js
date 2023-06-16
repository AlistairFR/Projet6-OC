import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/about.scss';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Footer />
  </React.StrictMode>
);