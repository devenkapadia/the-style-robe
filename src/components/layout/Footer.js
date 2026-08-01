import React from 'react';
import logo from '../../assets/tsr_nobg.png';
import './Footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logo} alt={content.site.name} className="footer-logo-image" />
              <div>
                <h3 className="footer-logo">{content.site.name}</h3>
                <p className="footer-tagline">{content.footer.tagline}</p>
              </div>
            </div>
            <p className="footer-description">{content.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {content.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              {content.footer.contact.phone.map((phone, index) => (
                <li key={index}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="footer-link">
                    📞 {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${content.footer.contact.email}`} className="footer-link">
                  📧 {content.footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="footer-social">
              {content.footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.platform}
                >
                  📸 {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Made with Bob

