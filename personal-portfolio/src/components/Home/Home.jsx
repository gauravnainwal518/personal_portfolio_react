import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-6 pt-32 pb-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-300">
            Hi there{" "}
            <span className="inline-block animate-waving-hand">👋</span>!
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            I'm Gaurav Chandra Nainwal
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
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

          {/* Social Icons */}
          <div className="pt-4 flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/gauravnainwal518"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravcn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE -  Video */}
        <div className="relative rounded-2xl overflow-hidden max-w-md md:max-w-lg w-full">
          <video
            src="/videos/introvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
