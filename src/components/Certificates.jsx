import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'October 28, 2026',
    image: '/certifications/Agentic_Ai_certification.jpg',
  },
  {
    title: 'AI & Machine Learning Course 2026',
    issuer: 'Udemy',
    date: 'November 6, 2026',
    image: '/certifications/Aiml_certification.jpg',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'October 23, 2026',
    image: '/certifications/Data_Analytic_certification.jpg',
  },
  {
    title: 'Complete Generative AI Course',
    issuer: 'Udemy',
    date: 'November 1, 2026',
    image: '/certifications/Gen_ai_certification.jpg',
  },
  {
    title: '2-Day Git & GitHub Master Workshop',
    issuer: 'Alpha Intern',
    date: 'June 6-7, 2026',
    image: '/certifications/Git_Hub_certification.jpg',
  },
  {
    title: '30 Days Power BI Micro Course',
    issuer: 'SkillCourse',
    date: 'October 24, 2026',
    image: '/certifications/Power_BI_Certification.jpeg',
  },
  {
    title: 'Python Using AI Workshop',
    issuer: 'AI for Techies',
    date: 'September 28, 2026',
    image: '/certifications/Python_certification.jpg',
  },
  {
    title: 'Full-Stack AI Prompt Web Development',
    issuer: 'Udemy',
    date: 'May 14, 2026',
    image: '/certifications/Web_Development_Using_AI_certification.jpg',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.article
              className="certificate-card"
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            >
              <a
                className="certificate-preview"
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${certificate.title} certificate`}
              >
                <img src={certificate.image} alt={certificate.title} loading="lazy" />
                <span className="certificate-open">
                  <ExternalLink size={16} />
                  View full size
                </span>
              </a>
              <div className="certificate-content">
                <div className="certificate-icon">
                  <Award size={18} />
                </div>
                <span className="experience-label">{certificate.issuer}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
