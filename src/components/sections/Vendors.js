import React, { useState } from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import './Vendors.css';

const Vendors = ({ content }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <Section id="vendors" background="gray">
      <SectionTitle 
        subtitle={content.subtitle}
        title={content.title}
      />
      
      <div className="vendors-categories">
        {content.categories.map((category) => (
          <div key={category.id} className="vendor-category">
            <h3 className="vendor-category-title">{category.name}</h3>
            <p className="vendor-category-intro">{category.intro}</p>
            
            <div className="vendor-top-picks">
              <h4 className="vendor-section-title">Top Picks</h4>
              <div className="vendor-grid">
                {category.topPicks.map((vendor, index) => (
                  <Card key={index} className="vendor-card">
                    <h5 className="vendor-name">{vendor.name}</h5>
                    <p className="vendor-artist">{vendor.artist || vendor.role}</p>
                    <p className="vendor-specialty">{vendor.specialty}</p>
                  </Card>
                ))}
              </div>
            </div>

            {category.exploreMore && category.exploreMore.length > 0 && (
              <div className="vendor-explore-more">
                <button 
                  className="explore-toggle"
                  onClick={() => toggleCategory(category.id)}
                >
                  {expandedCategories[category.id] ? 'Show Less' : 'Explore More'} 
                  <span className="toggle-icon">
                    {expandedCategories[category.id] ? '▲' : '▼'}
                  </span>
                </button>
                
                {expandedCategories[category.id] && (
                  <ul className="explore-list">
                    {category.exploreMore.map((vendor, index) => (
                      <li key={index} className="explore-item">{vendor}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Vendors;

// Made with Bob
