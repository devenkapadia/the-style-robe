import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import './About.css';

const About = ({ content }) => {
  return (
    <Section id="about" background="white">
      <SectionTitle 
        subtitle={content.subtitle}
        title={content.title}
      />
      <div className="about-content">
        <p className="about-description">{content.description}</p>
        
        <div className="founders-grid">
          {content.founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <h4 className="founder-name">{founder.name}</h4>
              <p className="founder-role">{founder.role}</p>
            </div>
          ))}
        </div>

        <p className="about-mission">{content.mission}</p>

        <div className="values-grid">
          {content.values.map((value, index) => (
            <div key={index} className="value-card">
              <h4 className="value-title">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;

// Made with Bob
