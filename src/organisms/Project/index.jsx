import React from 'react';
import ProjectImg from '../../atoms/ProjectImg';
import ProjectDescription from '../../molecules/ProjectDescription';
import './index.css';

const Project = ({name, src, description, links, children}) => {
  return (
    <div className="project">
      <ProjectImg src={src} name={name} />
      <ProjectDescription name={name} description={description} links={links}>
        {children}
      </ProjectDescription>
    </div>
  );
};

export default Project;
