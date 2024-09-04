/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../CSS/Hero.css' 
import { useDarkMode } from '../JSX/DarkModeContext'
import profileimg from '../../assets/profile-picc.png'
import linkedin from '../../assets/linkedin-svg.svg'
import github from '../../assets/github-svg.svg'
import resume from '../../assets/BILHA_MWENGI_CV.pdf'
import linkedinDark from '../../assets/linkedin-dark-rounded.png';
import githubDark from '../../assets/github-dark.png';

export default function Hero() {
  const { darkMode } = useDarkMode();

  const handleDownload = () => {
    window.open(resume, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='hero' id='home'>
        <img className="hero-img" src={profileimg} alt="picture of me"/>
        <p className='text'>Hello, I'm</p>
        <h4 className='hero-title'>Bilha Mwengi</h4>
        <p className='tag-line text'>A web developer with cybersecurity expertise</p>
        <button className='resume-btn' onClick={handleDownload}>My Resume</button>
        <div className="socials">
            <img src={darkMode ? linkedinDark : linkedin} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/bilha-mwengi/', "_blank", "noopener,noreferrer")}/>
            <img src={darkMode ? githubDark: github} alt="github" onClick={() => window.open('https://github.com/Bil-prog', "_blank", "noopener,noreferrer")} />
        </div>
 
    </div>
  )
}
