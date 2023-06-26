import React from 'react';
import Banner from "../components/Banner";
import bannerimg from "../images/aboutbanner.jpg"
import '../styles/About.scss';

function About() {
  return (
    <div className='about'>
      <Banner bannerimg = {bannerimg} />
    </div>
  )
}

export default About;