import { motion } from 'framer-motion';
import Tilt from './Tilt';
import profilePhoto from '../assets/photo/profile-photo.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Engineering thoughtful AI experiences</h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Tilt max={8}>
              <div className="glass-portrait">
                <img src={profilePhoto} alt="Dilnawaz Ansari" className="profile-img" />
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Dilnawaz Ansari</h3>
            <p className="about-highlight">Third-year CSE (AI & ML) student</p>
            <p>
              I am a Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning,
              focused on building elegant, useful systems that combine software engineering with AI-driven intelligence.
            </p>
            <p>
              My interests include machine learning, natural language processing, generative AI, intelligent agents, and
              modern software engineering. I enjoy translating complex ideas into practical applications that solve real-world problems.
            </p>
            <div className="about-meta-grid">
              <div className="meta-block">
                <span className="meta-label">Institution</span>
                <strong>Technocrats Institute of Technology - Excellence, Bhopal</strong>
              </div>
              <div className="meta-block">
                <span className="meta-label">Expected graduation</span>
                <strong>May 2028</strong>
              </div>
            </div>
            <div className="about-tags">
              <span>Machine Learning</span>
              <span>NLP</span>
              <span>Generative AI</span>
              <span>Intelligent Systems</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
