import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Tourism Platform",
      highlights: [
        "Connects travelers with guides",
        "Book homestays, tours & cultural events",
        "MERN stack for scalability & performance",
      ],
      image: "/images/project2.png",
      github: "https://github.com/gauravnainwal518/Tourism_platform",
      live: "https://tourism-platform-kappa.vercel.app/",
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
      title: "Online Blog Writing Platform",
      highlights: [
        "Create, edit & share blog posts",
        "Secure auth & storage via Appwrite",
        "Built with React for fast UI",
      ],
      image: "/images/blogphoto.png",
      github: "https://github.com/gauravnainwal518/Blog-platform-using-react",
      live: "https://blog-platform-using-react.vercel.app/",
    },
    {
      title: "Employee Management System",
      highlights: [
        "Add/edit/delete employee records",
        "LocalStorage data handling",
        "Built using React",
      ],
      image: "/images/project4.png",
      github: "https://github.com/gauravnainwal518/project4",
    },
    {
      title: "Personal Portfolio",
      highlights: [
        "React + Vite + Tailwind CSS",
        "Fully responsive dark UI",
        "Showcases projects & skills",
      ],
      image: "/images/personalportfolio.png",
      github: "https://github.com/gauravnainwal518/Portfolio",
      live: "https://gaurav-devfolio.vercel.app/",
    },
    {
      title: "Note App",
      highlights: [
        "Create and manage notes",
        "Edit & delete support",
        "Fast React interactions",
      ],
      image: "/images/noteapp.png",
      github: "https://github.com/gauravnainwal518/Note-app",
      live: "https://note-app-five-silk.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Small Section Label */}
        <p className="text-sm tracking-[0.35em] uppercase text-purple-400 text-center mb-4">
          Projects
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Selected Work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden transition duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <ul className="text-gray-400 text-sm space-y-2 flex-grow">
                  {project.highlights.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-6 flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-cyan-400 transition"
                  >
                    <FaGithub className="mr-2" size={18} />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-cyan-400 transition"
                    >
                      <FaExternalLinkAlt className="mr-2" size={18} />
                      Live
                    </a>
                  )}
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
