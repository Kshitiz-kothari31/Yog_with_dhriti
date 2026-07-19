import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'STUDIO OWNER, NYC',
    text: '"THERE IS NO ONE BETTER TO DO A YOGA RETREAT WITH. DHRITI HAS A CALMING PRESENCE AND SO MUCH WISDOM TO SHARE. HER CLASSES ARE MAGIC."',
  },
  {
    name: 'Emily Rivers',
    role: 'STUDENT, VANCOUVER',
    text: '"I HAVE NEVER FELT MORE SUPPORTED OR SEEN IN MY YOGA PRACTICE BEFORE. YOUR CLASSES ARE AMAZING AND TRANSFORMATIVE."',
  },
  {
    name: 'Hannah Hayes',
    role: 'STUDENT & TEACHER, BALI',
    text: '"YOUR WISDOM, GRACE, AND KNOWLEDGE ARE UNMATCHED. YOU BRING SO MUCH LIGHT INTO EVERY ROOM YOU WALK INTO. JUST SO GRATEFUL."',
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">Student Experiences</h2>
      <p className="section-subtitle">COMMUNITY IS EVERYTHING.</p>

      <div className="test-grid">
        {testimonials.map((test, idx) => (
          <div key={idx} className="test-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#8B5A44" color="#8B5A44" />
              ))}
            </div>
            <p className="test-text">{test.text}</p>
            <div className="test-author">
              <h4>{test.name}</h4>
              <span>{test.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
