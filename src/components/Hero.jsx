import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-subtitle">FIND YOUR CENTER</span>
        <h1 className="hero-title">Space to Breathe.<br />Room to Grow.</h1>
        <p className="hero-description">
          Experience transformative yoga practice tailored to your unique journey. 
          Professional guidance, intentional movement, and holistic wellness 
          put first for you.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/booking')}>
            Join Class Now <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" onClick={() => navigate('/classes')}>View Schedule</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
