import React from "react";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1>✨ Curating dream looks for every occasion</h1>
        <p>🍀 Fashion | Wedding | Personal Styling</p>
        <a
          href="https://www.instagram.com/thestyle_robe/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Follow on Instagram
        </a>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3>Fashion Styling</h3>
            <p>
              Curate trendy and timeless outfits for daily wear and special
              events.
            </p>
          </div>
          <div className="service-item">
            <h3>Wedding Styling</h3>
            <p>Create magical looks for brides, grooms, and wedding parties.</p>
          </div>
          <div className="service-item">
            <h3>Personal Styling</h3>
            <p>
              Personalized sessions to discover and enhance your unique style.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Get in Touch</h2>
        <p>📍 TheStyleRobe | Style that speaks</p>
        <p>📩 DM for styling collabs & bookings on Instagram</p>
        <a
          href="https://www.instagram.com/thestyle_robe/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          DM on Instagram
        </a>
      </section>
    </>
  );
};

export default Home;
