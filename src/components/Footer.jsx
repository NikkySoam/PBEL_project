import React from 'react';
import '../css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <h2>FoodCourt</h2>
          <p>Delicious food delivered to your doorstep.</p>
        </div>

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact</h3>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@foodcourt.com</p>
          <p>Address: 123 Food Street, Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodCourt. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
