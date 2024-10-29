import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-16 md:px-24">
        <div className="text-blue-700 text-lg font-bold relative group">
          <span className="text-gray-300 hover:text-white cursor-pointer">
            GN.
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
          </span>
        </div>
        <div className="hidden md:flex space-x-4 ml-4">
          <a href="#projects" className="nav-link text-gray-300 hover:text-white font-semibold">
            Projects
          </a>
          <a href="#skills" className="nav-link text-gray-300 hover:text-white font-semibold">
            Skills
          </a>
          <a href="#contact" className="nav-link text-gray-300 hover:text-white font-semibold">
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-900 shadow-md`}>
        <a href="#projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">
          Projects
        </a>
        <a href="#skills" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">
          Skills
        </a>
        <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
