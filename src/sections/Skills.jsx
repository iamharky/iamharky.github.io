import React from 'react';
import DevSkills from '../organisms/DevSkills';
import LangSkills from '../organisms/LangSkills';
import './index.css';

const Skills = () => {
  return (
    <div className="section" id="skills">
      <DevSkills />
      <LangSkills />
    </div>
  );
};

export default Skills;
