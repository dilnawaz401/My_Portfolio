import { motion } from 'framer-motion';
import Tilt from './Tilt';
import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  GitBranch,
  LayoutTemplate,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'C++', icon: Cpu },
      { name: 'SQL', icon: Database },
      { name: 'JavaScript', icon: Code2 },
      { name: 'HTML', icon: LayoutTemplate },
      { name: 'CSS', icon: LayoutTemplate },
    ],
  },
  {
    title: 'AI and Data Science',
    skills: [
      { name: 'Machine Learning', icon: Brain },
      { name: 'Deep Learning', icon: Sparkles },
      { name: 'NLP', icon: FileText },
      { name: 'Scikit-learn', icon: Brain },
      { name: 'Pandas', icon: Database },
      { name: 'NumPy', icon: Cpu },
    ],
  },
  {
    title: 'Development and Analytics',
    skills: [
      { name: 'REST APIs', icon: Workflow },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Advanced Excel', icon: BarChart3 },
      { name: 'Web Development', icon: Network },
    ],
  },
  {
    title: 'Currently Exploring',
    skills: [
      { name: 'Generative AI', icon: Sparkles },
      { name: 'RAG', icon: Network },
      { name: 'MCP', icon: Workflow },
      { name: 'Multi-Agent Systems', icon: Brain },
      { name: 'Docker', icon: Cloud },
      { name: 'AWS', icon: Cloud },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">AI engineering toolkit</h2>
        </div>

        <div className="skills-stack">
          {skillGroups.map((group, groupIndex) => (
            <div className="skills-group" key={group.title}>
              <h3 className={groupIndex === skillGroups.length - 1 ? 'skills-category exploring' : 'skills-category'}>
                {group.title}
              </h3>
              <div className="skills-grid">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Tilt key={`${group.title}-${skill.name}`} max={14}>
                      <motion.div
                        className="skill-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: (groupIndex + index) * 0.04 }}
                      >
                        <div className="skill-icon">
                          <Icon size={22} />
                        </div>
                        <span>{skill.name}</span>
                      </motion.div>
                    </Tilt>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
