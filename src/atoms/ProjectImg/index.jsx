import React from 'react';
import './index.css';

const ProjectImg = ({src, name}) => {
  return (
    <div className="project-image">
      <img src={src} alt={name} />
    </div>
  );
};

export default ProjectImg;
