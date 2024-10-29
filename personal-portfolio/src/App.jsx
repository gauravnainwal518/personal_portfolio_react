import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import ScrollTop from './components/ScrollTop/ScrollTop.jsx';

function App() {
  return (
    <div className="App bg-white text-black transition-colors duration-300">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ScrollTop />
    </div>
  );
}

export default App;
