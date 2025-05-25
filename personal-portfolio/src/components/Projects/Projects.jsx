import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Health Management System",
      description:
        "📋 Manages patient records digitally.\n📅 Allows easy online appointment booking.\n🔐 Ensures secure and smooth access for doctors and patients.",
      image: "/images/project1.png",
      github: "https://github.com/surajbisht-dev/Online_Healthcare_Checkup",
      live: "https://online-healthcare-checkup-1.onrender.com/",
    },
    {
      title: "Tourism Platform",
      description:
        "🌄 Connects travelers with local guides and authentic experiences in Uttarakhand.\n🏡 Offers bookings for homestays, guided tours, and cultural activities.\n💼 Built with the MERN stack to ensure performance, security, and seamless user experience.",
      image: "/images/project2.png",
      github: "https://github.com/gauravnainwal518/Tourism_platform",
      live: "https://tourism-platform.onrender.com/",
    },
    {
      title: "Online Blog Writing Platform",
      description:
        "📝 A modern blogging platform where users can create, edit, and share posts.\n🚀 Powered by Appwrite for secure user authentication, database, and file storage.\n⚛️ Built with React for a responsive and intuitive writing experience.",
      image: "/images/project3.png",
      github: "https://github.com/gauravnainwal518/Blog-platform-using-react",
      live: "https://blog-platform-using-react.vercel.app/",
    },
    {
      title: "Employee Management System (EMS)",
      description:
        "👥 A simple EMS app to manage employee records including add, edit, and delete functionality.\n💾 Data is stored locally in the browser using LocalStorage for persistence.\n🖥️ Built with React for a smooth and responsive user interface.",
      image: "/images/project4.png",
      github: "https://github.com/gauravnainwal518/project4",
      live: "https://liveproject4.com",
    },
  ];

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="bg-gray-900 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: {} }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          PROJECTS
          <motion.div
            className="h-1 w-20 bg-white mx-auto mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: 0 }}
          />
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              {/* Animated Image */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              {/* Info Box */}
              <motion.div
                className="group p-6 bg-gray-800 rounded-lg shadow-md min-h-[220px] flex flex-col justify-between hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-5 whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Site
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
