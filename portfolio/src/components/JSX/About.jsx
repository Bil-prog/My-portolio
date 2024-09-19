// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../CSS/About.css'
import abtImg from '../../assets/profile-pic-2.jpg'
import Tabs from '../JSX/Tabs'

export default function About() {
  return (
    <div className='about' id='about'>
        <div className="abt-pic-container">
            <img src={abtImg} alt="about image" className='abt-pic'/>
        </div>
        <div className="details-abt-container">
            <div className="text-container">
                <h1 className="title">About Me</h1>
                    <p className='abt-description text txt'>
                    Experienced Frontend Developer proficient in building responsive and user-friendly web applications using React JS while adhering to best practices in modern web development. Also, a cybersecurity analyst with comprehensive training and hands-on experience in ethical hacking, threat detection, and incident response, blending development and security skills to create secure applications.
                    </p>
            </div>
            <div className="timeline">
                <Tabs />
            </div>
        </div>
    </div>
  )
}
