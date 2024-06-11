/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../CSS/Contact.css'
import Hcaptcha from '@hcaptcha/react-hcaptcha';
import { useDarkMode } from '../JSX/DarkModeContext'
import linkedin from '../../assets/linkedin-svg-sq.svg'
import email from '../../assets/email-svg.svg'
import linkedinDark from '../../assets/linkedin-dark.png'
import emailDark from '../../assets/mail-dark.png'


export default function Contact() { 
    const { darkMode } = useDarkMode();
    const [result, setResult] = useState("");
    const [hcaptchaToken, setHcaptchaToken] = useState('');

    const onSubmit = async (event) => {
    event.preventDefault();

    if (!hcaptchaToken) {
      setResult("Please complete the hCaptcha challenge");
      return;
    }
    
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "14eec43c-6ba6-4e1d-b291-337da78a53bd");
    formData.append("hcaptcha", hcaptchaToken);

    try{
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email sent successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || 'Failed to send email');
      }
    } 
    catch (error){
      console.error('Error', error);
      setResult('An error occurred while sending the email');
    }
  };
  return (
    <div className='contact' id='contact'>
        <h1 className="title contact-main-title" style={{ textAlign: 'center' }}>Get in Touch</h1>
        <div className="contact-section">
            <div className="contact-left">
                <h3 className='hero-title contact-title'>Let's talk</h3>
                <p className='text'>I'd love to hear from you!</p>
                <p className='text'>Whether you have a question or just want to say hi, feel free to reach out.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={darkMode ? emailDark : email} alt="" className='contact-icon'/>
                        <a href="mailto:bilhamwengi34@gmail.com" className='contact-link text'>bilhamwengi34@gmail.com</a>
                    </div>
                    <div className="contact-detail">
                        <img src={darkMode ? linkedinDark : linkedin} alt="" className='contact-icon' />
                        <a href="https://www.linkedin.com/in/bilha-mwengi/" target="_blank" rel="noopener noreferrer" className="contact-link text">
                            My LinkedIn
                        </a>
                    </div>
                </div> 
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <input type="hidden" name="access_key" value="14eec43c-6ba6-4e1d-b291-337da78a53bd"></input>
                <label htmlFor="name"  className='text'>Name</label>
                <input type="text" placeholder='Enter your name' name="name" required />
                <label htmlFor="email" className='text'>Email</label>
                <input type="email" placeholder='Enter your email' name="email" required />
                <label htmlFor="message" className='text'>Message</label>
                <textarea id="message" placeholder='Write your message here' name="message" rows="7" required></textarea>
                <Hcaptcha 
                    sitekey="8a04f140-f98c-47f6-9f74-cfa26be28214"
                    onVerify={(token) => setHcaptchaToken(token)}
                />
                <button type="submit" className="contact-button resume-btn">Send Message</button>
            </form>
        </div>
        <span className='text'>{result}</span>
    </div>
  )
}
