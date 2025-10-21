import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaRegHandPeace } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 pt-32 pb-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 flex items-center justify-center md:justify-start gap-2">
            Hi there <FaRegHandPeace className="inline-block animate-bounce" />!
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I'm Gaurav Chandra Nainwal
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring MERN Stack Developer",
              2000,
              "Learning and Building Full Stack Projects",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-gray-300 block pt-2"
          />

          <p className="text-base md:text-lg text-gray-400 max-w-md mx-auto md:mx-0">
            Passionate about crafting modern web apps and solving real-world
            problems using JavaScript and the MERN stack.
          </p>

          {/* Social Icons - KEEPING on LEFT */}
          <div className="flex justify-center md:justify-start gap-6 pt-4 text-xl">
            <a
              href="https://github.com/gauravnainwal518"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/gauravcn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE ONLY (no icons) */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/programmer illustration.png"
            alt="Developer Illustration"
            className="w-[300px] md:w-[400px] animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
