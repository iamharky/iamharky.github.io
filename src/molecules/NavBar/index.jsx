import React, {useEffect, useState} from 'react';
import NavTab from '../../atoms/NavTab';
import './index.css';

const index = () => {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBoundings = (section) => document.getElementById(section).getBoundingClientRect();

  const handleScroll = () => {
    let top = getBoundings('about').top;
    let height = getBoundings('about').height;
    let projHeight = getBoundings('projects').height;

    if (top <= 0 && top > -height / 2) {
      setActiveTab('about');
    } else if (top <= -height / 2 && top > (-3 * height) / 2) {
      setActiveTab('skills');
    } else if (top <= (-3 * height) / 2 && top > (-3 * height) / 2 - projHeight) {
      setActiveTab('projects');
    } else if (top <= (-3 * height) / 2 - projHeight) {
      setActiveTab('contact');
    }
  };

  return (
    <div id="nav-bar">
      <NavTab activeTab={activeTab} sectionName="about" />
      <NavTab activeTab={activeTab} sectionName="skills" />
      <NavTab activeTab={activeTab} sectionName="projects" />
      <NavTab activeTab={activeTab} sectionName="contact" />
    </div>
  );
};

export default index;
