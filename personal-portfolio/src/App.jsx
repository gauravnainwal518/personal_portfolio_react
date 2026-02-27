import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GlobalBackground from "./components/Global/GlobalBackground.jsx";
import CustomCursor from "./components/Customcursor/CustomCursor.jsx";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App relative text-white overflow-x-hidden">
      <GlobalBackground />
      <CustomCursor />

      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
