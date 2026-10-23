import { motion } from 'framer-motion';
import { BookOpenText, GraduationCap, Sparkles } from 'lucide-react';
import Tilt from './Tilt';

const educationDetails = [
  {
    label: 'Education',
    title: 'B.Tech in Computer Science & Engineering (AI & ML)',
    meta: 'Technocrats Institute of Technology - Excellence, Bhopal',
    detail: 'Expected graduation: May 2028',
    icon: GraduationCap,
  },
  {
    label: 'Current Learning',
    title: 'Advanced AI and intelligent systems',
    meta: 'Generative AI, NLP, RAG, MCP, and multi-agent workflows',
    detail: 'Focused on building practical AI applications with strong engineering fundamentals.',
    icon: Sparkles,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Experience & Education</span>
          <h2 className="section-title">Academic foundation & growth</h2>
        </div>

        <div className="experience-grid">
          {educationDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <Tilt key={item.label} max={6}>
                <motion.article
                  className="experience-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-pin">
                    <Icon size={18} />
                  </div>
                  <div className="experience-content">
                    <span className="experience-label">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p className="experience-meta">{item.meta}</p>
                    <p>{item.detail}</p>
                  </div>
                </motion.article>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
