import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Centered Heading */}
        <h2 className="text-5xl font-bold text-center text-blue-400 underline underline-offset-8 decoration-blue-500">
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left - Text */}
          <div className="flex-1 space-y-6 text-center md:text-left max-w-xl">
            <p className="text-xl text-gray-300">
              I’m{" "}
              <span className="text-blue-400 font-semibold">
                Gaurav Chandra Nainwal
              </span>
              , a Full Stack Developer based in Uttarakhand, India. I specialize
              in building dynamic, user-focused web apps using the{" "}
              <span className="text-blue-400">MERN stack</span>.
            </p>

            <p className="text-base md:text-lg text-gray-400">
              I'm passionate about solving real-world problems through clean and
              scalable code. I love crafting intuitive UIs and continuously
              exploring new web technologies to enhance user experience.
            </p>

            <p className="text-base md:text-lg text-gray-400">
              When I’m not coding, I’m usually hiking in the hills,
              experimenting with drones and IoT devices, or diving into emerging
              tech like AI and Web 3.0.
            </p>
          </div>

          {/* Right - Image with Overlay */}
          <div className="flex-1 flex justify-center">
            <div className="relative bg-gray-800 p-1 rounded-2xl shadow-lg border border-gray-700 max-w-sm md:max-w-lg w-full">
              <img
                src="/images/about.jpg" // Replace with your actual image path
                alt="About visual"
                className="w-full h-auto object-cover rounded-xl"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
