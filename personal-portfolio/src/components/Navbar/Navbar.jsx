import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["Projects", "Skills", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-extrabold text-blue-500 cursor-pointer relative group">
          GN.
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-white"
              className="relative text-lg md:text-xl text-gray-300 hover:text-white font-semibold transition-colors duration-300 group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-lg text-gray-300 hover:text-white border-b border-gray-700 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
