import React, { useState } from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import './FAQ.css';

const FAQ = ({ content }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <Section id="faq" background="white">
      <SectionTitle 
        subtitle="Got Questions?"
        title="Frequently Asked Questions"
      />
      
      <div className="faq-container">
        {content.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-item ${openFAQ === faq.id ? 'faq-open' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{openFAQ === faq.id ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;

// Made with Bob
