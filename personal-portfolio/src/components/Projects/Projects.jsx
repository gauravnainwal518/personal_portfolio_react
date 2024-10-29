import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          PROJECTS
          <div className="h-1 w-20 bg-white mx-auto mt-2"></div>
        </h2>
        <div className="flex flex-wrap justify-center -mx-2">
          {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:-translate-y-1 max-w-xs min-h-72 mx-2 mb-4"
              style={{ width: '300px' }}
            >
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-xl font-semibold mb-2 text-center text-white">{project}</h3>
                <p className="text-md text-gray-300 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-auto">
                <a href="https://github.com/gauravnainwal518" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="#!" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
