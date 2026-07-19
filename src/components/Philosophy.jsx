import React from 'react';
import { Flower2, Wind, Activity } from 'lucide-react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section className="philosophy">
      <h2 className="section-title">Teaching Philosophy</h2>
      <p className="section-subtitle">THE ESSENCE OF CREATIVE MOVEMENT AND PRESENCE</p>

      <div className="philosophy-grid">
        {/* Intentional Presence */}
        <div className="phil-card card-1">
          <div className="phil-icon"><Flower2 size={24} color="#8B5A44" /></div>
          <h3>Intentional Presence</h3>
          <p>We believe in aligning our physical architecture within the subtle energy body in a long format lineage. Movement isn't just physical - it is a deep spiritual integration that takes mindful focus.</p>
          <img src="/intentional_img.png" alt="Intentional Presence" className="phil-image" />
        </div>

        {/* The Breath Bridge */}
        <div className="phil-card card-2">
          <div className="phil-icon-center"><Wind size={32} color="#FBF9F8" /></div>
          <h3 className="text-white">The Breath Bridge</h3>
          <p className="text-white opacity-80">Using the breath as a bridge into the nervous system. Our connection to the subtle body.</p>
          <div className="quote text-white">"Inhale to be, exhale to let go."</div>
        </div>

        {/* Body Autonomy */}
        <div className="phil-card card-3 bg-peach">
          <div className="phil-icon"><Activity size={24} color="#8B5A44" /></div>
          <h3>Body Autonomy</h3>
          <p>Your body, your practice, your rules. We call an inclusive energy while encouraging you to trust and honor your inner sensations.</p>
        </div>

        {/* Sustainable Practice */}
        <div className="phil-card card-4 bg-white flex-row">
          <img src="/sustainable_img.png" alt="Sustainable Practice" className="phil-image-small" />
          <div className="phil-content-right">
            <h3>Sustainable Practice</h3>
            <p>Built for the modern individual, we ensure you can find a life long practice that is healthy and transformative.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
