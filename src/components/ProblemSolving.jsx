import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, ExternalLink } from 'lucide-react';
import Tilt from './Tilt';

const platforms = [
  {
    name: 'GeeksforGeeks',
    label: 'GFG',
    description: '300+ questions solved across data structures, algorithms, and problem-solving fundamentals.',
    href: 'https://www.geeksforgeeks.org/profile/dilnawazahdic',
    accent: 'gfg',
    action: 'Practice',
  },
  {
    name: 'LeetCode',
    label: 'LC',
    description: 'Keep up with my ongoing LeetCode practice and interview problem-solving journey.',
    href: 'https://leetcode.com/u/D_A_00777/',
    accent: 'leetcode',
    action: 'Practice',
  },
  {
    name: 'GitHub',
    label: 'GH',
    description: 'Host projects, version control, and collaborate on code with repositories, commits, and open-source contributions.',
    href: 'https://github.com/dilnawaz401?tab=repositories',
    accent: 'github',
    action: 'Repositories',
  },
];

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="problem-solving">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Problem Solving</span>
          <h2 className="section-title">Data Structures & Algorithms</h2>
        </div>

        <div className="problem-grid">
          {platforms.map((platform, index) => (
            <Tilt key={platform.name} max={8}>
              <motion.a
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className={`problem-card ${platform.accent}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="problem-card-top">
                  <div className="problem-icon">
                    {platform.label}
                  </div>
                  <span className="problem-tag">
                    <Cpu size={14} />
                    {platform.action}
                  </span>
                </div>

                <h3>{platform.name}</h3>
                <p>{platform.description}</p>

                <div className="problem-card-footer">
                  <span>Explore</span>
                  <ArrowUpRight size={18} />
                </div>
              </motion.a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
