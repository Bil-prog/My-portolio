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
                    Cybersecurity analyst with comprehensive training and hands-on experience in ethical hacking, threat detection, and incident response. Proven ability to identify and mitigate security risks, backed by practical experience in real-world scenarios. Highly motivated to contribute to securing digital infrastructures and enhancing cybersecurity measures. I am also a skilled frontend developer with expertise in React JS, blending development and security skills to create secure applications. I am driven by a passion for innovation and continuous learning, and I am excited to leverage my skills to make meaningful contributions in the ever-evolving world of technology. 
                    </p>
            </div>
            <div className="timeline">
                <Tabs />
            </div>
        </div>
    </div>
  )
}
