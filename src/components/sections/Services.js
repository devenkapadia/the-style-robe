import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import './Services.css';

const Services = ({ content }) => {
  return (
    <Section id="services" background="gray">
      <SectionTitle 
        subtitle={content.subtitle}
        title={content.title}
      />
      <div className="services-grid">
        {content.items.map((service) => (
          <Card key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;

// Made with Bob
