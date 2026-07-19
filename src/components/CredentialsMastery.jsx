import React from 'react';
import './CredentialsMastery.css';

const CredentialsMastery = () => {
  return (
    <section className="credentials-section">
      <div className="credentials-header">
        <h2 className="section-title">Credentials & Mastery</h2>
        <p className="credentials-subtitle">Commitment to lifelong learning is at the heart of my teaching philosophy. Each certification represents a layer of safety and expertise for your practice.</p>
      </div>

      <div className="credentials-grid">
        {/* Card 1 */}
        <div className="cred-card cred-white cred-500">
          <div className="cred-icon">🏅</div>
          <h3>500-Hour RYT Advanced Yoga Medicine</h3>
          <p>In-depth training focused on anatomy, biomechanics, and the specific applications of yoga for modern injuries.</p>
          <div className="cred-badges">
            <span>ANATOMY</span>
            <span>THERAPEUTIC</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cred-card cred-brown cred-center cred-200">
          <h2>200</h2>
          <h4>INITIAL HOURS</h4>
          <p>Traditional Vinyasa<br/>Academy, India</p>
        </div>

        {/* Card 3 */}
        <div className="cred-card cred-peach cred-mindful">
          <div className="cred-icon">🧘‍♀️</div>
          <h3>Mindfulness-Based Stress Reduction (MBSR)</h3>
          <p>University of Massachusetts</p>
        </div>

        {/* Card 4 */}
        <div className="cred-card cred-white cred-prenatal">
          <h3>Prenatal Specialty</h3>
          <p>Supporting bodies through the journey of pregnancy with specialized care.</p>
          <div className="cred-icon-bottom">🤰</div>
        </div>

        {/* Card 5 */}
        <div className="cred-card cred-white cred-flex-row cred-trauma">
          <div>
            <h3>Trauma-Informed Training</h3>
            <p>Integrating somatic experiencing and nervous system regulation into every class for a safe, inclusive environment.</p>
          </div>
          <div className="cred-icon-large">🌿</div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsMastery;
