import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">Dilnawaz Ansari</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
