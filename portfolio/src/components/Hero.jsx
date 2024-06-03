/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profileimg from '../assets/profile-picc.png'
import linkedin from '../assets/linkedin-svg.svg'
import github from '../assets/github-svg.svg'

export default function Hero() {
  return (
    <div className='hero'>
        <img className="hero-img" src={profileimg} alt="picture of me"/>
        <p>Hello, I'm</p>
        <h4>I'm Bilha Mwengi</h4>
        <p className='tag-line'>A Web developer with Cybersecurity Expertise</p>
        <button className='resume-btn'>My Resume</button>
        <div className="socials">
            <img src={linkedin} alt="linkedin" className='linkedin'/>
            <img src={github} alt="github" />
        </div>

    </div>
  )
}
