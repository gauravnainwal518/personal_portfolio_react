import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Online Blog Writing Platform",
      description:
        "📝 A modern blogging platform where users can create, edit, and share posts.\n🚀 Powered by Appwrite for secure user authentication, database, and file storage.\n⚛️ Built with React for a responsive and intuitive writing experience.",
      image: "/images/blog.png",
      github: "https://github.com/gauravnainwal518/Blog-platform-using-react",
      live: "https://blog-platform-using-react.vercel.app/",
    },
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
      title: "Employee Management System (EMS)",
      description:
        "👥 A simple EMS app to manage employee records including add, edit, and delete functionality.\n💾 Data is stored locally in the browser using LocalStorage for persistence.\n🖥️ Built with React for a smooth and responsive user interface.",
      image: "/images/project4.png",
      github: "https://github.com/gauravnainwal518/project4",
      live: "https://liveproject4.com",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          PROJECTS
          <span className="block h-1 w-24 bg-blue-500 mx-auto mt-3 rounded"></span>
        </h2>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 md:h-56 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="whitespace-pre-line text-gray-300 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Icons at bottom */}
                <div className="mt-6 flex space-x-8 text-blue-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition font-medium"
                  >
                    <FaGithub className="mr-2" size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition font-medium"
                  >
                    <FaExternalLinkAlt className="mr-2" size={20} />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
