import React from "react";
import { FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiAppwrite,
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16 border border-gray-700 rounded-2xl p-8 shadow-lg backdrop-blur-md bg-opacity-30 bg-gray-900/30">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 decoration-blue-500">
          ABOUT ME
        </h2>

        {/* Introduction */}
        <div className="space-y-8 text-center px-4 py-12">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Gaurav Chandra Nainwal
            </span>
            , a Full Stack Developer from Uttarakhand, India.
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I specialize in building modern web applications using the{" "}
            <span className="text-blue-400 font-medium">MERN stack</span>. I’m
            passionate about writing clean, scalable code to solve real-world
            problems with efficiency and elegance.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-blue-300">
            <FaGraduationCap className="text-blue-400" /> Education
          </h3>
          <ul className="text-gray-300 text-base space-y-2 ml-1">
            <li>
              <span className="font-semibold text-white">
                MCA (Master of Computer Applications)
              </span>{" "}
              — Completed in 2025
            </li>
            <li>
              <span className="font-semibold text-white">
                B.Sc. (Bachelor of Science)
              </span>{" "}
              — Completed in 2022
            </li>
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-blue-300">
            <FaLaptopCode className="text-blue-400" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-4 text-lg text-gray-200">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiMongodb className="text-green-500" /> MongoDB
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiExpress className="text-gray-200" /> Express.js
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiReact className="text-cyan-400" /> React.js
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiNodedotjs className="text-green-600" /> Node.js
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiJavascript className="text-yellow-400" /> JavaScript
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiTypescript className="text-blue-400" /> TypeScript
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl shadow-md">
              <SiAppwrite className="text-pink-500" /> Appwrite
            </div>
          </div>
        </div>

        {/* Optional: Tools or Interests Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-blue-300">
            <FaTools className="text-blue-400" /> Interests & Tools
          </h3>
          <p className="text-gray-400">
            Apart from coding, I explore UI enhancement tools, stay curious
            about AI technologies, and actively follow emerging trends in Web
            3.0 and the broader tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
