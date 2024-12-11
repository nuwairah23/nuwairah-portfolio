import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href='https://www.linkedin.com/in/nuwairah-ahmad/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""></img></a>
        <a href='https://www.facebook.com/share/15demBAAyw/?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt=""></img></a>
        <a href='https://github.com/nuwairah23/' target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt=""></img></a>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Nuwairah Ahmad</p>
      </div>
    </footer>
  );
}
