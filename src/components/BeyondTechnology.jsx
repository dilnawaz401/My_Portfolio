import { motion } from 'framer-motion';
import { Dumbbell, Trophy } from 'lucide-react';

const liftingRecords = [
  { lift: 'Deadlift', weight: '230 kg' },
  { lift: 'Squat', weight: '170 kg' },
  { lift: 'Bench Press', weight: '110 kg' },
];

const BeyondTechnology = () => {
  return (
    <section id="beyond-tech" className="beyond-tech">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Beyond Technology</span>
          <h2 className="section-title">Sports &amp; Fitness</h2>
        </div>

        <div className="sports-grid">
          <motion.article
            className="sports-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <div className="sports-icon">
              <Trophy size={24} />
            </div>
            <span className="experience-label">Football</span>
            <h3>National-Level Football Player</h3>
            <p>
              Competitive football experience demonstrating teamwork, discipline, leadership, and
              performance under pressure.
            </p>
          </motion.article>

          <motion.article
            className="sports-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="sports-icon">
              <Dumbbell size={24} />
            </div>
            <span className="experience-label">Strength Training</span>
            <h3>Powerlifting Enthusiast</h3>
            <p>Passionate about powerlifting and progressive strength training.</p>
            <div className="lifting-records" aria-label="Personal lifting records">
              {liftingRecords.map(({ lift, weight }) => (
                <div className="lifting-record" key={lift}>
                  <strong>{weight}</strong>
                  <span>{lift}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <p className="sports-philosophy">
          I believe consistency, discipline, and continuous improvement are equally important in
          sports and technology.
        </p>
      </div>
    </section>
  );
};

export default BeyondTechnology;
