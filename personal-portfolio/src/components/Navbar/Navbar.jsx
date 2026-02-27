import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "about", "projects", "skills", "contact"];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-12">
        {/* ===== Logo ===== */}
        <div className="text-3xl md:text-4xl font-extrabold cursor-pointer relative group">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            GN.
          </span>
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-white"
              className="relative text-lg text-gray-300 hover:text-white font-medium transition-all duration-300 group cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* ===== Resume Button ===== */}
          <a
            href="/Gaurav_Nainwal_MERN_Stack_Developer.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] text-white px-5 py-2 rounded-lg text-sm font-medium transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* ===== Mobile Toggle ===== */}
        <div className="md:hidden text-white">
          <button onClick={handleToggle} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={handleClose}
              className="py-3 text-lg text-gray-300 hover:text-white border-b border-white/10 cursor-pointer transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/Gaurav_Nainwal_MERN_Stack_Developer.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] text-white text-center py-2 rounded-lg text-sm font-medium transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
