import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">Neha Adak</h1>
        <h2 className="hero-subtitle">DevOps Engineer</h2>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="btn-primary">
          View My Work
        </Link>
      </div>
      <div className="hero-image">
        <img src="/images/neha.jpg" alt="Neha Adak" className="floating" />
      </div>
    </section>
  );
};

export default Hero;
