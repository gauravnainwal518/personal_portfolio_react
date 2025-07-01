import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 pt-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          ABOUT ME
        </h2>

        {/* About Content */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          👋 I'm{" "}
          <span className="font-semibold text-white">Gaurav Nainwal</span>, a
          Full-Stack Developer and MCA student passionate about building modern,
          scalable web applications. My journey into tech revolves around
          continuous learning, working with the{" "}
          <span className="text-green-400">MERN stack</span>, and turning ideas
          into real-world solutions. I thrive on solving complex problems and
          love crafting applications that deliver a great user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
