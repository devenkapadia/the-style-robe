import React, { useState } from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import './Gallery.css';

// Import backdrop images
import greenBackdrop from '../../assets/backdrops/green.jpeg';
import ledBackdrop from '../../assets/backdrops/led.jpg';
import mirrorBackdrop from '../../assets/backdrops/mirror.jpeg';
import mughalBackdrop from '../../assets/backdrops/mughal.jpeg';
import rusticBackdrop from '../../assets/backdrops/rustic.avif';
import bananaBackdrop from '../../assets/backdrops/banana.jpeg';
import candleBackdrop from '../../assets/backdrops/candle.jpeg';
import mograBackdrop from '../../assets/backdrops/mogra.jpeg';

// Map image paths to imported images
const imageMap = {
  '/assets/backdrops/green.jpeg': greenBackdrop,
  '/assets/backdrops/led.jpg': ledBackdrop,
  '/assets/backdrops/mirror.jpeg': mirrorBackdrop,
  '/assets/backdrops/mughal.jpeg': mughalBackdrop,
  '/assets/backdrops/rustic.avif': rusticBackdrop,
  '/assets/backdrops/banana.jpeg': bananaBackdrop,
  '/assets/backdrops/candle.jpeg': candleBackdrop,
  '/assets/backdrops/mogra.jpeg': mograBackdrop
};

const Gallery = ({ content }) => {
  const [activeTab, setActiveTab] = useState('seasonal');

  const currentGallery = activeTab === 'seasonal' ? content.seasonal : content.timeless;

  return (
    <Section id="gallery" background="white">
      <SectionTitle 
        subtitle={content.subtitle}
        title={content.title}
      />
      
      <div className="gallery-tabs">
        <button 
          className={`gallery-tab ${activeTab === 'seasonal' ? 'active' : ''}`}
          onClick={() => setActiveTab('seasonal')}
        >
          {content.seasonal.title}
        </button>
        <button 
          className={`gallery-tab ${activeTab === 'timeless' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeless')}
        >
          {content.timeless.title}
        </button>
      </div>

      <p className="gallery-intro">{currentGallery.intro}</p>

      <div className="gallery-grid">
        {currentGallery.items.map((item) => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-image-wrapper">
              <img
                src={imageMap[item.image] || item.image}
                alt={item.title}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-description">{item.description}</p>
                <div className="gallery-tags">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="gallery-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;

// Made with Bob
