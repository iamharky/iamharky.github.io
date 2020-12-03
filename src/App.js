import React from 'react';
import NavBar from './molecules/NavBar';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './atoms/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <div id="container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
