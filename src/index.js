import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Banner />
    <Footer />
  </React.StrictMode>
);
