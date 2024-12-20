// Footer.jsx
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <h1>Foodle</h1>
          </div>
          <p>
            Foodle is your ultimate destination for food delivery and discovery.
            Bringing delicious moments to your table since 2024.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Follow Foodle on Facebook" />
            <img src={assets.twitter_icon} alt="Follow Foodle on Twitter" />
            <img src={assets.linkedin_icon} alt="Follow Foodle on LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-section footer-links">
          <h2>Explore Foodle</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li>+1-800-FOODLE</li>
            <li><a href="mailto:hello@foodle.com">hello@foodle.com</a></li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Foodle - Savor the Flavor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;