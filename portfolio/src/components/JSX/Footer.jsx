// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../CSS/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'> 
        <div className="footer-top">
            <h4 className='logo footer-logo'>Bilha<span>.</span></h4>
            <p className='tag-line footer-txt' style={{color: "#222"}}>A Web developer with Cybersecurity Expertise</p>
        </div>
        <hr />
        <div className="footer-bottom">
        <p>Copyright &#169; {currentYear} Bilha Mwengi. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer