import React from 'react';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript',
    'React', 'Redux', 'Node.js',
    'MongoDB', 'MySQL', 'GitHub'
  ];

  return (
    <section className="bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          SKILLS
          <div className="h-1 w-20 bg-white mx-auto mt-2"></div>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold text-gray-300 transform transition-transform duration-200 hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
