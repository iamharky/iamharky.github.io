import React, {useState} from 'react';
import ProjectTabs from '../molecules/ProjectTabs';
import Project from '../organisms/Project';
import Skill from '../atoms/Skill';
import SeeMoreLink from '../atoms/SeeMoreLink';
import './index.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <div className="section" id="projects">
      <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'web' ? (
        <div>
          <Project
            src={require('../../public/images/blog.png')}
            name="Fireblog"
            links={[
              {url: 'https://github.com/iamharky/fire-blog', isSourceCode: true},
              {url: 'https://blog-harky.web.app/', isSourceCode: false},
            ]}
            description="A personal blog app with Firebase authentication and Firestore. Owners can create, edit and delete posts. Owners can set post title, excerpt and, with the help of Quill JS, post content.">
            <>
              <Skill name="React JS" color="#222" bgColor="#61DAFB" />
              <Skill name="Quill JS" color="#FFF" bgColor="#222" />
              <Skill name="Firebase" color="#222" bgColor="#FBC02D" />
              <Skill name="Firestore" color="#222" bgColor="#FBC02D" />
            </>
          </Project>
          <Project
            src={require('../../public/images/dassist.png')}
            name="Diyet Assist - PWA"
            links={[{url: 'https://diyet-assist.com', isSourceCode: false}]}
            description="A practical calculation tool for Dietitians & Dietitian candidates. This is the Progressive Web App version of my Diyet Assist mobile app.">
            <>
              <Skill name="React JS" color="#222" bgColor="#61DAFB" />
              <Skill name="PWA" color="#FFF" bgColor="#E44D26" />
            </>
          </Project>
          <Project
            src={require('../../public/images/stranger.png')}
            name="StranGer"
            links={[
              {url: 'https://github.com/iamharky/stran-ger', isSourceCode: true},
              {url: 'https://stran-ger.netlify.app/', isSourceCode: false},
            ]}
            description="An app that uses Deezer API over RapidApi to search for music, fetch & show popular music, artist, and album data.">
            <>
              <Skill name="React JS" color="#222" bgColor="#61DAFB" />
              <Skill name="SASS" color="#FFF" bgColor="#BF4080" />
            </>
          </Project>
          <Project
            src="https://raw.githubusercontent.com/iamharky/ReactJS-Chart-Generator/master/chart-generator.gif"
            name="Chart Generator"
            links={[
              {url: 'https://github.com/iamharky/ReactJS-Chart-Generator', isSourceCode: true},
              {url: 'https://codepen.io/harky/full/xxbQRaz', isSourceCode: false},
            ]}
            description="A chart generator app built with ReactJS & ChartJS. Users can create charts with 6 different types, name them and download them.">
            <>
              <Skill name="React JS" color="#222" bgColor="#61DAFB" />
              <Skill name="Chart JS" color="#FFF" bgColor="#FF6384" />
            </>
          </Project>
          <Project
            src="https://raw.githubusercontent.com/iamharky/Etch-A-Sketch/master/etch-a-sketch.gif"
            name="Etch A Sketch"
            links={[
              {url: 'https://github.com/iamharky/Etch-A-Sketch', isSourceCode: true},
              {url: 'https://iamharky.github.io/Etch-A-Sketch/', isSourceCode: false},
            ]}
            description="A simple Sketch app built with Vanilla JS.">
            <Skill name="JavaScript" color="#222" bgColor="#FF0" />
          </Project>
          <SeeMoreLink />
        </div>
      ) : (
        <div>
          <Project
            src={require('../../public/images/dassist.png')}
            name="Diyet Assist"
            links={[
              {url: 'https://play.google.com/store/apps/details?id=dassist.harkytech.diyetassist', isSourceCode: false},
            ]}
            description="A practical calculation tool for Dietitians & Dietitian candidates. Built with React Native for mobile platforms. Available and has 2.5K+ downloads in Play Store.">
            <>
              <Skill name="React Native" color="#222" bgColor="#61DAFB" />
              <Skill name="Firebase" color="#222" bgColor="#FBC02D" />
              <Skill name="Firestore" color="#222" bgColor="#FBC02D" />
              <Skill name="RevenueCat" color="#FFF" bgColor="#f2545b" />
            </>
          </Project>
          <Project
            src="https://lh3.googleusercontent.com/zCzeOdqDIJe5C7gkPyG-fKlbTAdLz6LZplfpszffxpYcHRp1W5pnUluGfzDf6jvOBMg=s180-rw"
            name="Lîstika Peyvan"
            links={[{url: 'https://play.google.com/store/apps/details?id=tech.harky.peyv', isSourceCode: false}]}
            description="Lîstika Peyvan is a word game that shuffles the letters of a word and asks for the correct order to find the word. It contains 35 levels and each level has 10 words to find.
              The game also has 5 difficulty levels and each difficulty level has 7 levels.">
            <>
              <Skill name="Cordova" color="#FFF" bgColor="#333" />
              <Skill name="React JS" color="#222" bgColor="#61DAFB" />
            </>
          </Project>
          <Project
            src="https://lh3.googleusercontent.com/WgaWHxbCLvBHW3VsahZsW998KFQg9zR2TgR1MZ2CExJsLzGZDkukafNL6wroIx8L5n0=s180-rw"
            name="Mr. Robot Quotes"
            links={[{url: 'https://play.google.com/store/apps/details?id=com.mrrobotquotes', isSourceCode: false}]}
            description="A simple React Native app that shows shareable quotes from legendary series 'Mr. Robot'.">
            <Skill name="React Native" color="#222" bgColor="#61DAFB" />
          </Project>
        </div>
      )}
    </div>
  );
};

export default Projects;
