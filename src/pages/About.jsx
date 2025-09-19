import React from 'react';

const About = () => {
  return (
    <section className="about" style={{ padding: '40px', backgroundColor: '#f8f8f8' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Us</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Welcome to <strong>TastyBite</strong> – your go-to food ordering destination!
          We bring delicious meals from your favorite restaurants straight to your doorstep.
          Whether you're craving spicy Indian curries, cheesy pizzas, or healthy salads, 
          we’ve got something for every appetite.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px' }}>
          Our platform is fast, reliable, and super easy to use. With just a few clicks,
          you can browse menus, place your order, and track your food in real-time. 
          We believe in making food ordering a joyful and hassle-free experience.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px' }}>
          Thank you for choosing <strong>TastyBite</strong>. Good food is just a click away!
        </p>
      </div>
    </section>
  );
};

export default About;

