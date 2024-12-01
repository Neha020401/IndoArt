import React from 'react';
import './SocialResponsibility.css';

const SocialResponsibility = () => {
  return (
    <div className="responsibility-container">
      <div className="responsibility-header">
        <h1>Our Social Responsibility</h1>
      </div>
      <div className="responsibility-content">
        <p>
          At <strong>INDOART</strong>, we are driven by a mission to create a positive
          impact in society. Beyond supporting local artists, we strive to
          contribute to sustainability, cultural preservation, and community
          development. Here’s how we embody our commitment to social
          responsibility:
        </p>
      </div>

      <div className="responsibility-sections">
        <div className="responsibility-card">
          <h2>Empowering Local Artists</h2>
          <p>
            We work closely with artisans from rural and urban areas, providing
            them with a platform to showcase their talent and sell their
            creations to a global audience. By offering fair opportunities, we
            help these artists achieve financial independence.
          </p>
        </div>
        <div className="responsibility-card">
          <h2>Sustainable Practices</h2>
          <p>
            INDOART is committed to promoting eco-friendly practices. We
            encourage artists to use sustainable materials and minimize waste in
            their creations. Our packaging solutions are designed to reduce
            environmental impact.
          </p>
        </div>
        <div className="responsibility-card">
          <h2>Fair Trade Commitment</h2>
          <p>
            We ensure that all artists on our platform are paid fairly for their
            hard work and creativity. INDOART believes in building a
            transparent and supportive marketplace that benefits both artists
            and buyers.
          </p>
        </div>
        <div className="responsibility-card">
          <h2>Cultural Preservation</h2>
          <p>
            India’s traditional art forms are a treasure trove of heritage and
            history. Through INDOART, we aim to preserve endangered art forms by
            giving them the recognition they deserve and ensuring their
            continuity.
          </p>
        </div>
        <div className="responsibility-card">
          <h2>Community Development</h2>
          <p>
            We actively collaborate with NGOs and social organizations to
            empower communities through skill development programs, workshops,
            and educational initiatives that benefit aspiring artists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibility;
