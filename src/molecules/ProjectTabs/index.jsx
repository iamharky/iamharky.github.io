import React from 'react';
import ProjectTab from '../../atoms/ProjectTab';
import './index.css';

const ProjectTabs = ({activeTab, setActiveTab}) => {
  return (
    <div className="project-tabs">
      <ProjectTab name="web" activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectTab name="mobile" activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default ProjectTabs;
