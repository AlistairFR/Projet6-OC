import React from 'react';
import Banner from "../components/Banner";
import AboutCollapses from '../components/AboutCollapses';
import bannerimg from "../images/aboutbanner.jpg"
import '../styles/About.scss';

function About() {
  return (
    <div className='about'>
      <Banner bannerimg = {bannerimg} />
      <AboutCollapses />
    </div>
  )
}

export default About;