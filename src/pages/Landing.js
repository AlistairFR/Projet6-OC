import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';

function Landing() {
    return (
      <div className='Landing'>
        <NavBar />
        <Main />
        <Footer />
      </div>
    )
  }

export default Landing;