import React from 'react';
import './index.css';

const ProjectTab = ({name, activeTab, setActiveTab}) => {
  return (
    <button className={activeTab === name ? 'project-tab active' : 'project-tab'} onClick={() => setActiveTab(name)}>
      {name}
    </button>
  );
};

export default ProjectTab;
