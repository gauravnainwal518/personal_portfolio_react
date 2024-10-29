import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gray-900 text-center py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-white">
          HI, I am <span className="text-blue-400">Gaurav Nainwal</span>
        </h1>
        <p className="text-lg mb-6 font-bold text-white">Developer</p>
        <p className="text-sm text-gray-300 max-w-md mx-auto mb-8">
        I am a Frontend Developer, and I love to design websites. I live in Uttarakhand.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#resume" 
            className="resume-btn px-4 py-2 border-2 border-white text-white bg-white hover:bg-gray-600 hover:border-gray-600 transition-colors duration-300"
          >
            <span>Resume</span>
          </a>
          <a 
            href="https://github.com/gauravnainwal518" 
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://linkedin.com/in/gaurav-chandra-nainwal-72391b285" 
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
