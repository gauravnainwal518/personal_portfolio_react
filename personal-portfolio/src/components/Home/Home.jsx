import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 pt-32 pb-12">
      {/* Profile Photo */}
      <img
        src="/images/default.jpeg"
        alt="Gaurav Profile"
        className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg mb-8"
      />

      {/* Name & Intro */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center leading-tight">
        Hey! 👋 I'am <span className="block text-blue-400">Gaurav Nainwal</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 text-center text-gray-400 max-w-md">
        I'm a Full-Stack Developer passionate about building scalable and
        efficient web applications.
      </p>

      {/* Contact Info */}
      <div className="space-y-5 text-gray-300 max-w-sm w-full">
        <div className="flex items-center gap-4 justify-center">
          <FaPhoneAlt className="text-blue-400" />
          <a
            href="tel:+919084481518"
            className="hover:text-white transition text-base md:text-lg"
          >
            +91 9084481518
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <FaEnvelope className="text-blue-400" />
          <a
            href="mailto: gauravnainwal394@gmail.com"
            className="hover:text-white transition text-base md:text-lg"
          >
            gauravnainwal394@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <FaMapMarkerAlt className="text-blue-400" />
          <span className="text-base md:text-lg">Uttarakhand, India</span>
        </div>
      </div>

      {/* Resume & Social Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
        <a
          href="https://drive.google.com/file/d/1Yk8Ukg6qCs5EwvRwb-608OL2mUPNo5R-/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-md hover:bg-blue-500 hover:text-black transition text-lg"
        >
          View Resume
        </a>

        <a
          href="https://github.com/gauravnainwal518"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-4xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/gaurav-chandra-nainwal-72391b285"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-4xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Home;
