import { motion } from 'framer-motion';
import { BookOpenText, GraduationCap, Sparkles } from 'lucide-react';
import Tilt from './Tilt';

const educationDetails = [
  {
    label: 'Education',
    title: 'B.Tech in Computer Science & Engineering (AI & ML)',
    meta: 'Technocrats Institute of Technology - Excellence, Bhopal',
    detail: 'Current CGPA: 7.2 | Expected graduation: May 2028',
    icon: GraduationCap,
  },
  {
    label: 'School Education',
    title: 'Class 10 & Class 12 (CBSE)',
    meta: 'DAV Public School, Kathara',
    detail: 'Class 10: 76% | Class 12: 72%',
    icon: BookOpenText,
  },
  {
    label: 'Current Learning',
    title: 'Data science, analytics & Generative AI',
    meta: 'Machine learning, data analytics, NLP, and AI-powered frontend development',
    detail: 'Building practical skills through hands-on projects and continuous problem solving.',
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
