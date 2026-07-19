import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  { question: "What should I bring?", answer: "Please bring a yoga mat, a water bottle, and wear comfortable clothing. We provide props like blocks and straps." },
  { question: "Is it suitable for beginners?", answer: "Absolutely. All of our classes offer modifications, and our instructors are trained to support practitioners of all levels." },
  { question: "When should I arrive?", answer: "We recommend arriving 10-15 minutes before class starts so you have time to check in, set up your space, and settle down." }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section section-container">
      <div className="faq-grid">
        <div className="faq-content-left">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <p className="faq-subtitle">New to yoga or our studio? Here's what you need to know before you step onto the mat.</p>
          <img src="/faq_yoga_mat_1784355859822.png" alt="Yoga Mat" className="faq-image animate-fade-in" />
        </div>
        
        <div className="faq-accordion">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIdx === idx ? 'open' : ''}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown className="faq-icon" size={20} />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
