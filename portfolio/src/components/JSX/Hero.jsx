/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../CSS/Hero.css' 
import profileimg from '../../assets/profile-picc.png'
import linkedin from '../../assets/linkedin-svg.svg'
import github from '../../assets/github-svg.svg'
import resume from '../../assets/BILHA_MWENGI_CV.pdf'

export default function Hero() {
  const handleDownload = () => {
    window.open(resume, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='hero' id='home'>
        <img className="hero-img" src={profileimg} alt="picture of me"/>
        <p style={{color: "#222"}}>Hello, I'm</p>
        <h4 className='hero-title'>Bilha Mwengi</h4>
        <p className='tag-line' style={{color: "#222"}}>A Web developer with Cybersecurity Expertise</p>
        <button className='resume-btn' onClick={handleDownload}>My Resume</button>
        <div className="socials">
            <img src={linkedin} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/bilha-mwengi/', "_blank", "noopener,noreferrer")}/>
            <img src={github} alt="github" onClick={() => window.open('https://github.com/Bil-prog', "_blank", "noopener,noreferrer")}/>
        </div>
 
    </div>
  )
}
