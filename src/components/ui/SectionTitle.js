import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`section-title ${centered ? 'section-title-centered' : ''} ${className}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-heading">{title}</h2>
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionTitle;

// Made with Bob
