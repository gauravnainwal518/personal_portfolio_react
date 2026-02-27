import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small Section Label */}
        <p className="text-sm tracking-[0.35em] uppercase text-purple-400 mb-4">
          About
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Crafting Modern & Scalable
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Web Experiences
          </span>
        </h2>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-purple-500/20 transition duration-500 text-left">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate{" "}
            <span className="text-white font-semibold">
              MERN Stack Developer
            </span>{" "}
            focused on building performance-driven and scalable web
            applications.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            I love creating clean UI, smooth animations, and efficient backend
            systems that power real-world products.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm bg-white/10 border border-white/10 rounded-full text-purple-300"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
