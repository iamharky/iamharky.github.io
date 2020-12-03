import React from 'react';
import ProjectLinks from '../ProjectLinks';
import './index.css';

const ProjectDescription = ({name, description, links, children}) => {
  return (
    <div className="project-description">
      <span className="project-name">{name}</span>
      <p className="description">{description}</p>
      <hr />
      <p className="built-with">{children}</p>
      <ProjectLinks links={links} />
    </div>
  );
};

export default ProjectDescription;
