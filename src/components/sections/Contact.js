import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import './Contact.css';

const Contact = ({ content }) => {
  return (
    <Section id="contact" background="gradient">
      <SectionTitle 
        subtitle={content.subtitle}
        title={content.title}
      />
      
      <p className="contact-description">{content.description}</p>

      <div className="contact-methods">
        {content.methods.filter(method => method.primary).map((method, index) => (
          <a 
            key={index}
            href={method.link}
            className="contact-method"
            target={method.type === 'instagram' ? '_blank' : undefined}
            rel={method.type === 'instagram' ? 'noopener noreferrer' : undefined}
          >
            <span className="contact-icon">{method.icon}</span>
            <div className="contact-info">
              <span className="contact-label">{method.label}</span>
              <span className="contact-value">{method.value}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-cta">
        <Button 
          variant="secondary" 
          size="lg"
          href={content.methods.find(m => m.type === 'whatsapp')?.link}
        >
          {content.cta.primary}
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          href={content.methods.find(m => m.type === 'instagram')?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.cta.secondary}
        </Button>
      </div>

      <p className="contact-note">{content.note}</p>
    </Section>
  );
};

export default Contact;

// Made with Bob
