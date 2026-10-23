import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Tilt from './Tilt';

const contactLinks = [
  {
    name: 'Email',
    value: 'dilnawazansari401@gmail.com',
    href: 'mailto:dilnawazansari401@gmail.com',
    icon: Mail,
  },
  {
    name: 'Phone',
    value: '+91 9122864316',
    href: 'tel:+919122864316',
    icon: Phone,
  },
  {
    name: 'LinkedIn',
    value: 'Dilnawaz Ansari',
    href: 'https://www.linkedin.com/in/dilnawaz-ansari-931215358/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    value: 'dilnawaz_ansari_00777',
    href: 'https://www.instagram.com/dilnawaz_ansari_00777/',
    icon: Instagram,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container section-shell">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s build the next intelligent product</h2>
        </div>

        <div className="contact-links">
          {contactLinks.map(({ name, value, href, icon: Icon }) => (
            <Tilt key={name} max={9}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="contact-item">
                <div className="contact-icon">
                  <Icon size={28} />
                </div>
                <span className="contact-label">{name}</span>
                <span className="contact-value">{value}</span>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
