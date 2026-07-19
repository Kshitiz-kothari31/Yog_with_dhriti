import React, { useState } from 'react';
import { Mail, MapPin, Share2 } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const classType = e.target.classType.value;
    const date = e.target.date.value;
    const notes = e.target.notes.value;
    
    const message = `*New Booking Request*%0A%0A*Name:* ${fullName}%0A*Email:* ${email}%0A*Class Type:* ${classType}%0A*Preferred Date:* ${date}%0A*Notes:* ${notes || 'None'}`;
    
    const whatsappUrl = `https://wa.me/919412318526?text=${message}`;
    
    e.target.reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="booking-page animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
      <section className="booking-header-section">
        <h1 className="booking-title">Reserve Your Space</h1>
        <p className="booking-subtitle">
          Whether you're looking for a private session or joining a group class, let's find<br />the rhythm that suits your practice.
        </p>
      </section>

      <section className="booking-content-section section-container">
        <div className="booking-grid">

          {/* Left Column: Contact Details */}
          <div className="booking-contact">
            <div className="contact-info-card">
              <h3 className="contact-title">Connect with Us</h3>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={22} strokeWidth={1.5} /></div>
                <div className="contact-text">
                  <span className="contact-label">EMAIL</span>
                  <a href="mailto:hello@mindfulbreath.yoga">bandhaniswati@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={22} strokeWidth={1.5} /></div>
                <div className="contact-text">
                  <span className="contact-label">STUDIO</span>
                  <p>Rishikesh<br />Uttarakhand, India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Share2 size={22} strokeWidth={1.5} /></div>
                <div className="contact-text">
                  <span className="contact-label">SOCIALS</span>
                  <div className="contact-socials">
                    <a href="https://www.instagram.com/yog_with_dhriti?igsh=d293djV4azQ4YXQx">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74617260558!2d78.2005697672201!3d30.086928076629737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rishikesh Map"
                ></iframe>
                <div className="map-overlay">
                  <span>Rishikesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="booking-form-card">
            {isSubmitted ? (
              <div className="success-animation">
                <div className="checkmark-circle">
                  <div className="background"></div>
                  <div className="checkmark draw"></div>
                </div>
                <h3>Request Initiated!</h3>
                <p>Redirecting to WhatsApp to send your details...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                  <label htmlFor="fullName">FULL NAME</label>
                  <input type="text" id="fullName" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input type="email" id="email" placeholder="name@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="classType">CLASS TYPE</label>
                  <div className="custom-select-wrapper">
                    <select id="classType" required defaultValue="Vinyasa Flow">
                      <option value="Vinyasa Flow">Vinyasa Flow</option>
                      <option value="Yin Yoga">Yin Yoga</option>
                      <option value="Meditation">Meditation</option>
                      <option value="Private Session">Private Session</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="date">PREFERRED DATE</label>
                  <input type="date" id="date" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">NOTES OR INTENTIONS (OPTIONAL)</label>
                <textarea id="notes" placeholder="Tell us about your practice or any injuries we should know about..." rows="4"></textarea>
              </div>

              <div className="form-checkbox">
                <label className="checkbox-container">
                  <input type="checkbox" id="newsletter" defaultChecked />
                  <span className="checkmark"></span>
                  <span className="checkbox-label">Keep me updated with seasonal workshops and mindful tips.</span>
                </label>
              </div>

              <button type="submit" className="btn-submit-booking">
                CONFIRM REQUEST <span className="arrow">→</span>
              </button>

              <p className="cancellation-policy">
                By booking, you agree to our <a href="#">Cancellation Policy</a>.
              </p>
            </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Booking;
