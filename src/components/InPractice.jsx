import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './InPractice.css';

const InPractice = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="in-practice-section">
      <div className="in-practice-container">
        <div className="in-practice-header">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>In Practice</h2>
            <p className="in-practice-subtitle">Glimpses into our community, workshops, and the quiet moments between breaths.</p>
          </div>
          <div className="camera-icon">
            📷
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item large-left" onClick={() => setSelectedImage('/about-gallery-1.jpg')}>
            <img src="/about-gallery-1.jpg" alt="Yoga class" />
          </div>
          <div className="gallery-item top-middle" onClick={() => setSelectedImage('/about-gallery-2.jpg')}>
            <img src="/about-gallery-2.jpg" alt="Adjusting posture" />
          </div>
          <div className="gallery-item top-right" onClick={() => setSelectedImage('/about-gallery-3.jpg')}>
            <img src="/about-gallery-3.jpg" alt="Outdoor yoga" />
          </div>
          <div className="gallery-item bottom-wide" onClick={() => setSelectedImage('/about-gallery-4.jpg')}>
            <img src="/about-gallery-4.jpg" alt="Workshop demonstration" />
          </div>
        </div>
      </div>

      {selectedImage && createPortal(
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default InPractice;
