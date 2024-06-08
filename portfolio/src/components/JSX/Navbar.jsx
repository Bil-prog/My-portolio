// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../CSS/Navbar.css';
import menuIcon from '../../assets/menu-icon.svg';
import closeMenuIcon from '../../assets/close-menu.svg';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const handleContactClick = () => {
    setActiveIndex(null);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h4 className='logo'>Bilha<span>.</span></h4>
      <div className="menu-container">
        {/* Toggle menu icon for smaller screens */}
        <img
          src={menuOpen ? closeMenuIcon : menuIcon}
          className='menu-icon'
          onClick={toggleMenu}
          alt={menuOpen ? 'close menu icon' : 'menu icon'}
        />
        
        {/* Navigation menu for larger screens */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Expertise', 'Projects'].map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleNavClick(index, item.toLowerCase())}
            >
              {item}
            </li>
          ))}
          {window.innerWidth <= 768 && (
            <li className="contact-hero-title" onClick={handleContactClick}>
            Contact Me
            </li>
          )}
          
        </ul>
      </div>
      <div className="nav-btn" onClick={handleContactClick}>Contact Me</div>
    </div>
  );
}
