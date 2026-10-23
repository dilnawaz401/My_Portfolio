import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, ExternalLink } from 'lucide-react';
import Tilt from './Tilt';

const platforms = [
  {
    name: 'GeeksforGeeks',
    label: 'GFG',
    description: 'Practice DSA, interview patterns, and problem-solving fundamentals across arrays, graphs, trees, and optimization.',
    href: 'https://www.geeksforgeeks.org/profile/dilnawazahdic',
    accent: 'gfg',
  },
  {
    name: 'LeetCode',
    label: 'LC',
    description: 'Solve daily coding challenges, strengthen algorithmic thinking, and prepare for technical interviews.',
    href: 'https://leetcode.com/',
    accent: 'leetcode',
  },
  {
    name: 'GitHub',
    label: 'GH',
    description: 'Host projects, version control, and collaborate on code with repositories, commits, and open-source contributions.',
    href: 'https://github.com/dilnawaz401git',
    accent: 'github',
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
                    Practice
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
