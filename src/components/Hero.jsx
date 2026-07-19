import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fade-up">
          <span className="hero-subtitle">Hello, I'm</span>
          <h1 className="hero-title">Dilnawaz Ansari</h1>
          <h2 className="hero-subtitle" style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Full Stack AI Web Developer & Data Scientist</h2>
          <p className="hero-description">
            Passionate about building intelligent web applications and leveraging data science to solve real-world problems. 
            Specializing in AI, Machine Learning, and modern web technologies.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
