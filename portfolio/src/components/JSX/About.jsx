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
                        With a background spanning web development, data analysis and cybersecurity, I bring a diverse skill set tailored to meet the evolving demands of the digital landscape. I specialize in crafting visually appealing and user-centric interfaces while ensuring seamless functionality. My expertise in cybersecurity encompasses reconnaissance, vulnerability analysis, and penetration testing, contributing to robust threat mitigation strategies. I am driven by a passion for innovation and continuous learning, and I am excited to leverage my skills to make meaningful contributions in the ever-evolving world of technology. 
                    </p>
            </div>
            <div className="timeline">
                <Tabs />
            </div>
        </div>
    </div>
  )
}
