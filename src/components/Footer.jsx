import { Code2, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-socials">
          <a href="https://github.com/dilnawaz401git" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/dilnawaz-ansari-931215358/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={22} />
          </a>
          <a href="https://www.geeksforgeeks.org/profile/dilnawazahdic" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks profile">
            <Code2 size={22} />
          </a>
          <a href="https://www.instagram.com/dilnawaz_ansari_00777/" target="_blank" rel="noreferrer" aria-label="Instagram profile">
            <Instagram size={22} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Dilnawaz Ansari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
