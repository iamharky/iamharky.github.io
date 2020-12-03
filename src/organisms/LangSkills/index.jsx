import React from 'react';
import SkillHeading from '../../atoms/SkillHeading';
import Skill from '../../atoms/Skill';
import SkillRow from '../../atoms/SkillRow';

const LangSkills = () => {
  return (
    <>
      <SkillHeading text="languages" />
      <SkillRow>
        <Skill name="English" color="#FFF" bgColor="#00247d" />
        <Skill name="Kurdish" color="#FFF" bgColor="#228f42" />
        <Skill name="Turkish" color="#FFF" bgColor="#e30a17" />
      </SkillRow>
    </>
  );
};

export default LangSkills;
