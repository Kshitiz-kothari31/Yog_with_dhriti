import React from 'react';
import { Sparkles, Activity, Globe } from 'lucide-react';
import './Journey.css';

const Journey = () => {
  return (
    <section className="journey section-container" id="about">
      <div className="journey-grid">
        <div className="journey-image-wrapper">
          <img
            src="/about_img.jpeg"
            alt="Woman meditating on beach"
            className="journey-image"
          />
        </div>
        <div className="journey-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Her Journey</h2>

          <div className="journey-items">
            <div className="journey-item">
              <div className="journey-icon">
                <Sparkles size={24} />
              </div>
              <div className="journey-text">
                <h3>Traditional Roots</h3>
                <p>Began as a spiritual path in ashrams, grounding her foundations in the traditional yoga practices and wisdom.</p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <Activity size={24} />
              </div>
              <div className="journey-text">
                <h3>Modern Integration</h3>
                <p>Brought these teachings to the global modern context offering contemporary adaptations to traditional themes.</p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <Globe size={24} />
              </div>
              <div className="journey-text">
                <h3>Global Impact</h3>
                <p>Led over 20 international retreats and certified 500+ yoga teachers through the international YA Academy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
