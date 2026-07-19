import React from 'react';
import './AboutCTA.css';

const AboutCTA = () => {
  return (
    <section className="about-cta-wrapper">
      <div className="about-cta-card">
        <h2>Ready to begin your journey?</h2>
        <p>Whether you are a beginner or looking to deepen your practice, we have a space for you.<br/>Join our global community today.</p>
        <div className="about-cta-buttons">
          <button className="btn-cta-primary">Join Class Now</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
