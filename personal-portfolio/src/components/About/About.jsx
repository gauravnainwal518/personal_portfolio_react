import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white py-20"
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          variants={childVariants}
        >
          Hi, I am <span className="text-blue-400">Gaurav Nainwal</span>
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white tracking-wide"
          variants={childVariants}
        >
          MERN Stack Developer | From{" "}
          <span className="text-green-400">Database</span> to Dynamic{" "}
          <span className="text-green-400">UI</span>
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
          variants={childVariants}
        >
          🚀 I'm a{" "}
          <span className="text-white font-semibold">Full Stack Developer</span>{" "}
          specializing in the{" "}
          <span className="text-green-400 font-semibold">MERN stack</span>. I
          craft scalable and dynamic web applications from concept to deployment
          using <span className="text-yellow-300 font-semibold">MongoDB</span>,{" "}
          <span className="text-blue-400 font-semibold">Express</span>,{" "}
          <span className="text-cyan-400 font-semibold">React</span>, and{" "}
          <span className="text-green-500 font-semibold">Node.js</span>.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          variants={childVariants}
        >
          <a
            href="https://drive.google.com/file/d/15-y0IQEOWBp3gwMX1KHC0w9ot1LRvEpk/view?usp=drive_link"
            className="px-6 py-2 border-2 border-white text-white font-medium hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 rounded-md"
          >
            View Resume
          </a>
          <a
            href="https://github.com/gauravnainwal518"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://linkedin.com/in/gaurav-chandra-nainwal-72391b285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={36} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
