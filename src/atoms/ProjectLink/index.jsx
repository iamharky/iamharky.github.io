import React from 'react';
import './index.css';

const ProjectLink = ({url, isSourceCode}) => {
  return (
    <a className="project-link" target="_blank" rel="noopener noreferrer" href={url}>
      {isSourceCode ? 'Source Code' : 'Go to Project'}
    </a>
  );
};

export default ProjectLink;
