import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          Yog with dhriti
        </a>
        
        <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item"><NavLink to="/" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"} end onClick={closeMenu}>Home</NavLink></li>
          <li className="navbar-item"><NavLink to="/classes" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>Classes</NavLink></li>
          <li className="navbar-item"><NavLink to="/about" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>About</NavLink></li>
          <li className="navbar-item"><NavLink to="/booking" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>Booking</NavLink></li>
          <li className="navbar-item mobile-cta">
            <button className="btn-primary" onClick={() => { navigate('/booking'); closeMenu(); }}>Join Class</button>
          </li>
        </ul>
        <div className="navbar-cta desktop-cta">
          <button className="btn-primary" onClick={() => navigate('/booking')}>Join Class</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
