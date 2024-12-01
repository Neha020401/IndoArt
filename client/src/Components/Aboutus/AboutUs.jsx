import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About INDOART</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>INDOART</strong>, a platform dedicated to empowering
          local Indian artists by giving them a space to showcase and sell their
          unique, handmade art. We believe in preserving India's rich cultural
          heritage by providing opportunities for artisans and creators to grow
          their businesses.
        </p>
        <p>
          At INDOART, our mission is to bring together customers who value
          traditional craftsmanship and the talented artists who pour their
          hearts into creating these stunning pieces. From intricate home decor
          to exclusive handmade products, we aim to bridge the gap between
          creators and customers while ensuring fair pricing for everyone.
        </p>
        <p>
          Join us in supporting the rich diversity of Indian art, culture, and
          tradition. Together, we can help our artists thrive and make Indian
          art accessible to the world.
        </p>
      </div>
      <div className="about-footer">
        <h2>Why Choose INDOART?</h2>
        <ul>
          <li>Support Local Artists</li>
          <li>Promote Handmade and Sustainable Art</li>
          <li>Wide Range of Unique Products</li>
          <li>Affordable Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
