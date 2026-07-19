import React from 'react';
import { Github, ExternalLink, Thermometer, Building2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Temperature Prediction ML Model",
      description: "An intelligent machine learning model that predicts location-based temperature using historical weather data, feature engineering, and advanced regression algorithms.",
      github: "https://github.com/dilnawaz401",
      link: "#",
      tags: ["Python", "Machine Learning", "Feature Engineering", "Scikit-learn", "Data Science"],
      icon: <Thermometer size={80} />
    },
    {
      title: "University Full Stack Website",
      description: "A comprehensive university management system with student portal, faculty dashboard, course registration, and admin panel built with modern web technologies.",
      github: "https://github.com/dilnawaz401",
      link: "#",
      tags: ["React", "Node.js", "MongoDB", "Express", "Full Stack"],
      icon: <Building2 size={80} />
    },
    {
      title: "AI-Powered Chatbot",
      description: "An intelligent chatbot using NLP and deep learning for natural language understanding and automated responses.",
      github: "https://github.com/dilnawaz401",
      link: "#",
      tags: ["NLP", "Deep Learning", "TensorFlow", "Python"],
      icon: <span className="text-6xl">🤖</span>
    },
    {
      title: "Power BI Data Dashboard",
      description: "Interactive business intelligence dashboard with real-time data visualization, KPI tracking, and advanced analytics.",
      github: "https://github.com/dilnawaz401",
      link: "#",
      tags: ["Power BI", "Data Visualization", "Analytics", "SQL"],
      icon: <span className="text-6xl">📊</span>
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-placeholder">
                {project.icon}
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-badge">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} className="project-link"><Github size={22} /> Source Code</a>
                  {project.link && <a href={project.link} className="project-link"><ExternalLink size={22} /> Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
