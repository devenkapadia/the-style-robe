import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Packages from './components/sections/Packages';
// import Vendors from './components/sections/Vendors';
import Gallery from './components/sections/Gallery';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import contentData from './content.json';
import './App.css';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Load content from JSON
    setContent(contentData);

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (!content) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header content={content} />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Services content={content.services} />
        <Packages content={content.packages} />
        {/* <Vendors content={content.vendors} /> */}
        <Gallery content={content.gallery} />
        <FAQ content={content.faqs} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content} />
    </div>
  );
}

export default App;

// Made with Bob
