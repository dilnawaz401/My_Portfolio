import React from 'react';
import { Mail, Linkedin, Github, Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <p className="hero-description" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="contact-links">
            <a href="mailto:dilnawazansari401@gmail.com" className="contact-item">
              <div className="contact-icon"><Mail size={30} /></div>
              <span className="fw-semibold">Email</span>
              <span className="text-muted">dilnawazansari401@gmail.com</span>
            </a>
            <a href="tel:+919122864316" className="contact-item">
              <div className="contact-icon"><Phone size={30} /></div>
              <span className="fw-semibold">Phone</span>
              <span className="text-muted">+91 9122864316</span>
            </a>
            <a href="https://github.com/dilnawaz401" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon"><Github size={30} /></div>
              <span className="fw-semibold">GitHub</span>
              <span className="text-muted">dilnawaz401</span>
            </a>
            <a href="https://www.linkedin.com/in/dilnawaz-ansari-931215358/" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon"><Linkedin size={30} /></div>
              <span className="fw-semibold">LinkedIn</span>
              <span className="text-muted">Dilnawaz Ansari</span>
            </a>
            <a href="https://www.instagram.com/dilnawaz_ansari_00777/" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon"><Instagram size={30} /></div>
              <span className="fw-semibold">Instagram</span>
              <span className="text-muted">@dilnawaz_ansari_00777</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
