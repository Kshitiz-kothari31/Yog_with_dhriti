import React from 'react';
import './ClassTypes.css';

const ClassTypes = () => {
  return (
    <section className="class-types section-container">
      <div className="class-types-grid">
        <div className="class-card vinyasa">
          <img src="/class1.png" alt="Vinyasa Flow" />
          <div className="class-card-overlay">
            <span className="class-tag">Active & Flowing</span>
            <h3>Vinyasa Flow</h3>
            <p>Connect breath with movement in a dynamic sequence designed to build strength and flexibility.</p>
          </div>
        </div>

        <div className="class-card yin">
          <img src="/class2.png" alt="Yin Yoga" />
          <div className="class-card-overlay">
            <span className="class-tag">Restorative</span>
            <h3>Yin Yoga</h3>
            <p>Slow down and target deep connective tissues through long-held, meditative postures.</p>
          </div>
        </div>

        <div className="class-card meditation">
          <img src="/class3.png" alt="Meditation" />
          <div className="class-card-overlay">
            <h3>Meditation</h3>
            <p>Find mental clarity and inner peace through guided mindfulness practices.</p>
          </div>
        </div>

        <div className="class-text-card">
          <h3>Personalized 1-on-1 Sessions</h3>
          <p>Tailored instruction to meet your specific goals, whether you're a beginner or looking to advance your practice.</p>
          <button className="btn-secondary">Inquire About Privates</button>
        </div>
      </div>
    </section>
  );
};

export default ClassTypes;
