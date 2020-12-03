import React from 'react';
import './index.css';

const NavTab = ({activeTab, sectionName}) => {
  return (
    <a
      className={activeTab === sectionName ? "tab active-tab" : "tab"}
      href={"#" + sectionName}>
      {sectionName}
    </a>
  );
};

export default NavTab;
