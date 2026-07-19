import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './FloatingBookButton.css';

const FloatingBookButton = () => {
  const navigate = useNavigate();

  return (
    <button className="floating-book-btn" onClick={() => navigate('/booking')}>
      <Calendar size={18} />
      Book Your Mat
    </button>
  );
};

export default FloatingBookButton;
