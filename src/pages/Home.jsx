import React from 'react';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Philosophy from '../components/Philosophy';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Journey />
      <Philosophy />
      <Certifications />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
