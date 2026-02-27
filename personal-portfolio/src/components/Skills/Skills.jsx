import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiCypress,
  SiCucumber,
  SiJenkins,
  SiMocha,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={28} /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" size={28} /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={28} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" size={28} />,
    },
    { name: "React", icon: <SiReact className="text-cyan-400" size={28} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" size={28} /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" size={28} />,
    },
    { name: "Express", icon: <SiExpress className="text-white" size={28} /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" size={28} />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={28} /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400" size={28} />,
    },
    { name: "GitHub", icon: <SiGithub className="text-white" size={28} /> },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-400" size={28} />,
    },
    {
      name: "Cypress",
      icon: <SiCypress className="text-green-400" size={28} />,
    },
    {
      name: "Cucumber",
      icon: <SiCucumber className="text-green-600" size={28} />,
    },
    { name: "Mocha", icon: <SiMocha className="text-yellow-600" size={28} /> },
    { name: "Jenkins", icon: <SiJenkins className="text-red-500" size={28} /> },
  ];

  return (
    <section id="skills" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        {/* Small Label */}
        <p className="text-sm tracking-[0.35em] uppercase text-purple-400 text-center mb-4">
          Skills
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Tech Stack I Use
        </h2>
        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden mt-12">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl min-w-max hover:shadow-purple-500/20 hover:scale-105 transition duration-300"
              >
                {skill.icon}
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
