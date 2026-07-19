import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-socials" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href="https://github.com/dilnawaz401" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dilnawaz-ansari-931215358/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/dilnawaz_ansari_00777/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }}>
            <Instagram size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Dilnawaz Ansari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
