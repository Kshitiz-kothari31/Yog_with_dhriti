import React from 'react';
import './FounderJourney.css';

const FounderJourney = () => {
  return (
    <section className="founder-journey section-container">
      <div className="founder-header animate-fade-in">
        <span className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1rem', display: 'block' }}>The Founder's Journey</span>
        <h1 className="founder-title">Breathing space into the<br/>modern career.</h1>
        <p className="founder-subtitle">A path from high-pressure corporate environments to the tranquility of mindful instruction.</p>
      </div>

      <div className="founder-content">
        <div className="founder-image-col">
          <img src="/about-founder.jpg" alt="Founder of Mindful Breath Yoga" className="founder-img animate-fade-in" />
        </div>
        
        <div className="founder-narrative-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="narrative-title">Professional Narrative</h2>
          <p className="narrative-intro">Before finding the mat, I spent a decade navigating the fast-paced world of digital strategy. I understood the weight of burnout and the physical toll of chronic stress. This unique background allows me to bridge the gap between high-performance demands and the need for somatic recovery.</p>
          
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2019 — PRESENT</span>
              <h3 className="timeline-role">Founder & Lead Instructor</h3>
              <p className="timeline-desc">Established Mindful Breath Yoga, focusing on corporate wellness and therapeutic vinyasa. Successfully trained over 500 students and consulted for Fortune 500 wellbeing programs.</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2014 — 2018</span>
              <h3 className="timeline-role">Senior Creative Strategist</h3>
              <p className="timeline-desc">Led high-stakes digital transformations while simultaneously completing my first 200-hour RYT. Developed the 'Quiet Mind' workshop series for creative professionals.</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2009 — 2014</span>
              <h3 className="timeline-role">Digital Analyst</h3>
              <p className="timeline-desc">The foundation of my journey — where the realization of the necessity for intentional movement first sparked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
