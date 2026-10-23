import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Problem Solving', href: '#problem-solving' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience & Education', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <header className="navbar-wrap">
      <motion.span className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <nav className="navbar container" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Dilnawaz Ansari home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">DA</span>
          <span className="brand-name">Dilnawaz Ansari</span>
        </a>

        <div className="nav-actions">
          <div className="status-pill">
            <span className="status-dot" />
            Open to Opportunities
          </div>

          <button
            className="menu-button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
