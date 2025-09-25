import React, { useState } from 'react';
import '../css/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your feedback has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@foodcourt.com</p>
          <p><strong>Address:</strong> 123 Food Street, Delhi, India</p>
        </div>

        <div className="contact-form">
          <h2>Feedback / Complaint</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback or Complaint"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
