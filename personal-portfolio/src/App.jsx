import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx"; // <-- import Home
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div className="App text-white transition-colors duration-300 relative z-10">
      <Navbar />

      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default App;
