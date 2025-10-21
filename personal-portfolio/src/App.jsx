import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App text-white transition-colors duration-300 relative z-10">
      <Navbar />

      {/* Home Section */}
      <Element name="home" className="min-h-screen">
        <Home />
      </Element>

      {/* About Section */}
      <Element name="about" className="min-h-screen">
        <About />
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="min-h-screen">
        <Projects />
      </Element>

      {/* Skills Section */}
      <Element name="skills" className="min-h-screen">
        <Skills />
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="min-h-screen">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
