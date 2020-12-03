import React from 'react';
import AboutImg from '../atoms/AboutImg';
import AboutHeading from '../atoms/AboutHeading';
import AboutText from '../atoms/AboutText';
import './index.css';

const About = () => {
  return (
    <div className="section" id="about">
      <AboutImg />
      <AboutHeading />
      <AboutText />
    </div>
  );
};

export default About;
