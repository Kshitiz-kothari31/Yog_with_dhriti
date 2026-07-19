import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Yog with dhriti</h3>
          <p>A space for intentional movement and mental clarity. Find your path to authentic holistic wellness.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <a href="#classes">Classes</a>
            <a href="#about">About</a>
            <a href="#booking">Booking</a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>bandhaniswati@gmail.com</p>
          <p>Rishikesh, Uttarakhand, India</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/yog_with_dhriti?igsh=d293djV4azQ4YXQx"><InstagramIcon /></a>
            <a href="#"><TwitterIcon /></a>
            <a href="mailto:bandhaniswati@gmail.com?subject=Asking%20for%20class"><Mail size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yog with dhriti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
