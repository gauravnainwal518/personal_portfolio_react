import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Online Blog Writing Platform",
      highlights: [
        "Create, edit & share blog posts",
        "Secure auth, DB, and storage via Appwrite",
        "Built with React for fast UI",
      ],
      image: "/images/blog.png",
      github: "https://github.com/gauravnainwal518/Blog-platform-using-react",
      live: "https://blog-platform-using-react.vercel.app/",
    },
    {
      title: "E-Health Management System",
      highlights: [
        "Manage patient records digitally",
        "Online appointment booking",
        "Secure access for doctors & patients",
      ],
      image: "/images/project1.png",
      github: "https://github.com/surajbisht-dev/Online_Healthcare_Checkup",
      live: "https://online-healthcare-checkup-1.onrender.com/",
    },
    {
      title: "Tourism Platform",
      highlights: [
        "Connects travelers with guides",
        "Book homestays, tours & cultural events",
        "MERN stack for scalability & performance",
      ],
      image: "/images/project2.png",
      github: "https://github.com/gauravnainwal518/Tourism_platform",
      live: "https://tourism-platform.onrender.com/",
    },
    {
      title: "Employee Management System (EMS)",
      highlights: [
        "Add/edit/delete employee records",
        "Data stored in browser via LocalStorage",
        "Built using React for a smooth UX",
      ],
      image: "/images/project4.png",
      github: "https://github.com/gauravnainwal518/project4",
      live: "https://liveproject4.com",
    },
  ];

  return (
    <section id="projects" className="bg-[#0f172a] py-20 px-6 text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center text-blue-400 decoration-blue-500 mb-12 tracking-wide">
          PROJECTS
        </h2>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] border border-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col"
            >
              {/* Fake Monitor Header */}
              <div className="bg-gray-900 border-b border-gray-700 p-2 text-xs text-gray-400 flex items-center gap-2 font-mono">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Project Screenshot */}
              <div className="aspect-video overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-top"
                  loading="lazy"
                />
              </div>

              {/* Text & Links */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                  {project.title}
                </h3>

                <ul className="text-gray-300 text-sm flex-grow space-y-2 list-disc list-inside">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="mt-6 flex space-x-8 text-blue-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition"
                  >
                    <FaGithub className="mr-2" size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 transition"
                  >
                    <FaExternalLinkAlt className="mr-2" size={18} />
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
