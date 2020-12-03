import React from 'react';
import SkillRow from '../../atoms/SkillRow';
import './index.css';

const SkillGroup = ({mainSkill, children, color, bgColor}) => {
  return (
    <div className="skill-group" style={{color, backgroundColor: bgColor}}>
      <p className="main-skill">{mainSkill}</p>
      <SkillRow>{children}</SkillRow>
    </div>
  );
};

export default SkillGroup;
