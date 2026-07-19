import React from 'react';
import FounderJourney from '../components/FounderJourney';
import CredentialsMastery from '../components/CredentialsMastery';
import InPractice from '../components/InPractice';
import AboutCTA from '../components/AboutCTA';

const About = () => {
  return (
    <div className="about-page animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
      <FounderJourney />
      <CredentialsMastery />
      <InPractice />
      <AboutCTA />
    </div>
  );
};

export default About;
