import React from 'react';
import ProjectLink from '../../atoms/ProjectLink';
import './index.css';

const ProjectLinks = ({links}) => {
  return (
    <div className="project-links">
      {links.map((link, i) => (
        <ProjectLink key={i} url={link.url} isSourceCode={link.isSourceCode} />
      ))}
    </div>
  );
};

export default ProjectLinks;
