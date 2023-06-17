import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/About.scss';
import NavBar from './Navbar';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
function About() {
  root.render(
      <React.StrictMode>
          <NavBar />
          <Footer />
      </React.StrictMode>
  );
}

export default About;