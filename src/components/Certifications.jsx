import React from 'react';
import { Award, Heart, Leaf, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    icon: <Award size={24} color="#8B5A44" />,
    title: '200hr Yoga Alliance',
    year: 'YTT LONDON 2020',
    desc: 'Comprehensive training in Hatha & Vinyasa lineages. Anatomy, asana, and alignment focus.',
  },
  {
    icon: <Heart size={24} color="#8B5A44" />,
    title: 'Trauma Informed Yoga',
    year: 'THE OM STUDIO 2021',
    desc: 'Specialized training for creating accessible, sensitive classes. Study of the nervous system.',
  },
  {
    icon: <Leaf size={24} color="#8B5A44" />,
    title: 'Ayurvedic Wellness Coach',
    year: 'VEDIC ACADEMY 2022',
    desc: 'Integrating ancient wisdom into modern lifestyles for holistic wellness and balance.',
  },
  {
    icon: <ShieldCheck size={24} color="#8B5A44" />,
    title: 'Standard Certification',
    year: 'STANDARD 2023',
    desc: 'Advanced training and intensive deep dive into meditation and breathwork.',
  },
];

const Certifications = () => {
  return (
    <section className="certifications section-container">
      <div className="cert-header">
        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Recent Certifications</h2>
          <p className="cert-subtitle">ONGOING EDUCATION IS ESSENTIAL TO MY TEACHINGS</p>
        </div>
        <div className="cert-nav">
          <button className="nav-btn"><ChevronLeft size={20} /></button>
          <button className="nav-btn"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <span className="cert-year">{cert.year}</span>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
