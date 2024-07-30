// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../CSS/Navbar.css';
import { useDarkMode } from './DarkModeContext'
import moonIcon from '../../assets/moon.png'
import sunIcon from '../../assets/sun.png'
import menuIconLight from '../../assets/menu-icon.png';
import menuIconDark from '../../assets/menu-dark-icon.png'
import closeMenuIconLight from '../../assets/close-menu.png';
import closeMenuIconDark from '../../assets/close-menu-dark.png'


export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false);
  //const [darkMode, setDarkMode] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  // const handleContactClick = () => {
  //   setActiveIndex(null);
  //   document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  //   closeMenu();
  // };

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
  const menuIcon = darkMode ? menuIconDark : menuIconLight;
  const closeMenuIcon = darkMode ? closeMenuIconDark : closeMenuIconLight;

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h4 className='logo'>Bilha<span>.</span></h4>
      <div className="menu-container">
        <img
          src={menuOpen ? closeMenuIcon : menuIcon}
          className='menu-icon'
          onClick={toggleMenu}
          alt={menuOpen ? 'close menu icon' : 'menu icon'}
        />
        
        
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item, index) => (
            <li
              key={index}
              className={`text ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleNavClick(index, item.toLowerCase())}
            >
              {item}
            </li>
          ))}
          {/* {window.innerWidth <= 768 && (
            <li className="contact-hero-title" onClick={handleContactClick}>
            Contact Me
            </li>
          )} */}
          
        </ul>
      </div>
      {/* <div className="nav-btn" onClick={handleContactClick}>Contact Me</div> */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src={darkMode ? moonIcon : sunIcon} alt="Mode Icon" className='modeIcon'/>
      </button>
    </div>
  );
} 
