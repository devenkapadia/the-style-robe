import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import './Packages.css';

const Packages = ({ content }) => {
  return (
    <Section id="packages" background="gray">
      <SectionTitle 
        subtitle="Our Packages"
        title="Choose Your Perfect Package"
      />
      <div className="packages-grid">
        {content.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`package-card ${pkg.popular ? 'package-popular' : ''}`}
          >
            {pkg.popular && <div className="package-badge">Most Popular</div>}
            <h3 className="package-name">{pkg.name}</h3>
            <div className="package-price">{pkg.price}</div>
            <p className="package-description">{pkg.description}</p>
            <ul className="package-features">
              {pkg.features.map((feature, index) => (
                <li key={index} className="package-feature">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              variant={pkg.popular ? 'primary' : 'outline'}
              href="#contact"
              className="package-cta"
            >
              {pkg.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Packages;

// Made with Bob
