import React from 'react';
import Skill from '../../atoms/Skill';
import SkillHeading from '../../atoms/SkillHeading';
import SkillRow from '../../atoms/SkillRow';
import SkillGroup from '../../molecules/SkillGroup';

const DevSkills = () => {
  return (
    <>
      <SkillHeading text="development" />
      <SkillGroup mainSkill="JavaScript" color="#222" bgColor="#FF0">
        <Skill name="React" color="#222" bgColor="#61DAFB" />
        <Skill name="React Native" color="#222" bgColor="#61DAFB" />
        <Skill name="Svelte" color="#FFF" bgColor="#FF3E00" />
        <Skill name="Vue" color="#FFF" bgColor="#41B883" />
        <Skill name="PWA" color="#FFF" bgColor="#E44D26" />
      </SkillGroup>
      <SkillGroup mainSkill="CSS" color="#FFF" bgColor="#3CAADB">
        <Skill name="SASS" color="#FFF" bgColor="#BF4080" />
        <Skill name="Materialize" color="#FFF" bgColor="#EB7077" />
      </SkillGroup>
      <SkillGroup mainSkill="Python" color="#FFF" bgColor="#356C9A">
        <Skill name="Flask" color="#222" bgColor="#FFF" />
      </SkillGroup>
      <SkillRow>
        <Skill name="Git" color="#FFF" bgColor="#000" />
      </SkillRow>
    </>
  );
};

export default DevSkills;
