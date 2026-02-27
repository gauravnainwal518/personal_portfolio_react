import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-tag">
        <span className="hero-tag-dot"></span>
        Available for new projects
      </div>

      <h1 className="hero-title">
        <span className="line">
          <span>Hi, I'm Gaurav.</span>
        </span>

        <span className="line">
          <span className="gradient-text">Full Stack</span>
        </span>

        <span className="line">
          <span>Developer.</span>
        </span>
      </h1>

      <p className="hero-desc">
        I craft fast, beautiful, and scalable web experiences — from
        pixel-perfect interfaces to robust backend systems.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>

        <a href="#contact" className="btn-ghost">
          Let's Talk
        </a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  );
};

export default Hero;
