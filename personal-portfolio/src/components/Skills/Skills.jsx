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
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={24} /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" size={24} /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={24} />,
    },
    { name: "React", icon: <SiReact className="text-cyan-400" size={24} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" size={24} /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" size={24} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" size={24} />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={24} /> },
    { name: "GitHub", icon: <SiGithub className="text-white" size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="bg-gray-900 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          SKILLS
          <div className="h-1 w-20 bg-white mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="relative group bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 text-lg font-semibold text-gray-300 transform transition-transform duration-200 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/30 hover:border hover:border-white"
            >
              <motion.div
                whileHover={{ rotate: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {skill.icon}
              </motion.div>
              <span>{skill.name}</span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center text-white text-sm font-medium">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
