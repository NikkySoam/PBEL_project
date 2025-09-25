import React from 'react';
import '../css/about.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About FoodCourt</h2>
        <p>
          Welcome to <strong>FoodCourt</strong>, your one-stop destination for delicious meals delivered right to your doorstep.
          From spicy street food to gourmet delicacies, we bring you a wide variety of dishes crafted with love and the finest ingredients.
        </p>
        <p>
          Whether you're craving Indian classics like Chole Bhature and Biryani, or international favorites like Pizza and Pasta — we’ve got you covered.
          Our mission is to serve you fresh, hygienic, and mouth-watering food, anytime and anywhere.
        </p>
        <p>
          <em>“Good food is the foundation of genuine happiness.”</em> — and we live by it.
        </p>
      
        <div className="terms-section">
          <h2>Terms & Conditions</h2>
          <p>
            By using our services, you agree to abide by our terms and conditions. Orders once placed cannot be cancelled after preparation has started.
            Prices and availability of items are subject to change without prior notice.
          </p>
          <p>
            FoodCourt is not responsible for delays caused by unforeseen circumstances such as traffic, weather, or public holidays.
            Users must provide accurate delivery information to avoid delivery failures.
          </p>
        </div>

       
        <div className="privacy-section">
          <h2>Privacy Policy</h2>
          <p>
            We respect your privacy and are committed to protecting your personal data. Any information you provide, such as name, contact, and location,
            will be used solely for order processing and delivery purposes.
          </p>
          <p>
            Your data will not be shared with third parties without your consent. We use secure technologies to safeguard your information from unauthorized access.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
