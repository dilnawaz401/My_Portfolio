import React from 'react';
import profilePhoto from '../assets/photo/profile-photo.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image">
            <img src={profilePhoto} alt="Dilnawaz Ansari" className="profile-img" />
          </div>
          <div className="about-text">
            <h3>Dilnawaz Ansari</h3>
            <p className="text-primary" style={{ fontWeight: '600', marginBottom: '1rem' }}>dilnawazansari401@gmail.com</p>
            <p>
              I'm a passionate <strong>Full Stack AI Web Developer</strong> and <strong>Data Scientist</strong> 
              with a deep interest in building intelligent, data-driven applications.
            </p>
            <p>
              My expertise spans across both web development and data science domains. 
              I specialize in creating modern, responsive web applications while also harnessing 
              the power of <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and 
              <strong> Natural Language Processing (NLP)</strong> to solve complex problems.
            </p>
            <p>
              With a strong foundation in <strong>Feature Engineering</strong>, I transform raw data into actionable insights 
              and build predictive models. I'm also proficient in <strong>Power BI</strong> for data visualization 
              and <strong>GitHub</strong> for version control and collaboration.
            </p>
            <div className="about-tags">
              <span className="about-tag">AI & ML</span>
              <span className="about-tag">Deep Learning</span>
              <span className="about-tag">NLP</span>
              <span className="about-tag">Power BI</span>
              <span className="about-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
