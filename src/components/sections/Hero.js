import React from 'react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = ({ content }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            <span className="hero-title-main">{content.title.main}</span>
            <span className="hero-title-sub">{content.title.sub}</span>
          </h1>
          <p className="hero-subtitle fade-in">{content.subtitle}</p>
          <p className="hero-description fade-in">{content.description}</p>
          <div className="hero-cta fade-in">
            <Button 
              variant="primary" 
              size="lg" 
              href={content.cta.primary.href}
            >
              {content.cta.primary.text}
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              href={content.cta.secondary.href}
            >
              {content.cta.secondary.text}
            </Button>
          </div>
          <div className="hero-scroll-indicator">
            {/* <span>Scroll to explore</span> */}
            {/* <div className="scroll-arrow">↓</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Made with Bob
