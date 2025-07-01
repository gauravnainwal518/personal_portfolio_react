import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiExpress,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={28} /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" size={28} /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={28} />,
    },
    { name: "React", icon: <SiReact className="text-cyan-400" size={28} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" size={28} /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" size={28} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-white" size={28} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" size={28} />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={28} /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" size={28} />,
    },
    { name: "GitHub", icon: <SiGithub className="text-white" size={28} /> },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-400" size={28} />,
    },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-16 pt-32 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">SKILLS</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center space-y-3 text-center"
            >
              {skill.icon}
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
