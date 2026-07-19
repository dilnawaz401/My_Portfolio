import React from 'react';
import { Code, Layout, Server, Database, Smartphone, GitBranch, Brain, BarChart3, Sparkles, FileText } from 'lucide-react';

const Skills = () => {
  const webDevSkills = [
    { name: 'HTML5', icon: <Layout /> },
    { name: 'CSS3', icon: <Layout /> },
    { name: 'JavaScript', icon: <Code /> },
    { name: 'React', icon: <Smartphone /> },
    { name: 'Node.js', icon: <Server /> },
    { name: 'Git', icon: <GitBranch /> },
  ];

  const dataScienceSkills = [
    { name: 'Machine Learning', icon: <Brain /> },
    { name: 'Deep Learning', icon: <Sparkles /> },
    { name: 'NLP', icon: <FileText /> },
    { name: 'Feature Engineering', icon: <Brain /> },
    { name: 'Power BI', icon: <BarChart3 /> },
    { name: 'Data Analysis', icon: <Database /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-section">
          <h3 className="skills-category">Web Development</h3>
          <div className="skills-grid">
            {webDevSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section" style={{ marginTop: '3rem' }}>
          <h3 className="skills-category">Data Science & AI</h3>
          <div className="skills-grid">
            {dataScienceSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
