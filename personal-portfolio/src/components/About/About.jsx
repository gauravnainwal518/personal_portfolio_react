import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Typing-style header reveal */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4 overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Hi, I am <span className="text-blue-400">Gaurav Nainwal</span>
        </motion.h1>

        {/* Subtitle with gradient */}
        <motion.p
          className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 tracking-wide"
          variants={childVariants}
        >
          MERN Stack Developer | From Database to Dynamic UI
        </motion.p>

        {/* Paragraph */}
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

        {/* Resume + Social Icons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          variants={childVariants}
        >
          {/* Floating Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1Yk8Ukg6qCs5EwvRwb-608OL2mUPNo5R-/view?usp=drive_link"
            className="px-6 py-2 border-2 border-white text-white font-medium hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 rounded-md"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            View Resume
          </motion.a>

          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/gauravnainwal518"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={36} />
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://linkedin.com/in/gaurav-chandra-nainwal-72391b285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={36} />
          </motion.a>
        </motion.div>

        {/*  scroll-down arrow */}
        <motion.div
          className="mt-12 flex justify-center text-2xl text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
