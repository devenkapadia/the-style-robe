import React from 'react';
import './Section.css';

const Section = ({ 
  id, 
  children, 
  className = '', 
  background = 'white',
  padding = 'default',
  ...props 
}) => {
  return (
    <section 
      id={id} 
      className={`section section-${background} section-padding-${padding} ${className}`}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;

// Made with Bob
