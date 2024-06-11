/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../CSS/Contact.css'
import { useDarkMode } from '../JSX/DarkModeContext'
import linkedin from '../../assets/linkedin-svg-sq.svg'
import email from '../../assets/email-svg.svg'
import linkedinDark from '../../assets/linkedin-dark.png'
import emailDark from '../../assets/mail-dark.png'

export default function Contact() { 
    const { darkMode } = useDarkMode();
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      setResult("Please complete the reCAPTCHA challenge");
      return;
    }
    setResult("Sending....");
    const formData = new FormData(event.target);
 
    formData.append("access_key", "14eec43c-6ba6-4e1d-b291-337da78a53bd");
    formData.append("g-recaptcha-response", recaptchaResponse);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent successfully");
      event.target.reset();
      grecaptcha.reset(); // Reset reCAPTCHA after successful submission
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
        <h1 className="title contact-main-title" style={{ textAlign: 'center' }}>Get in Touch</h1>
        <div className="contact-section">
            <div className="contact-left">
                <h3 className='hero-title contact-title'>Let's talk</h3>
                <p className='text'>I'd love to hear from you!</p>
                <p className='text'> Whether you have a question or just want to say hi, feel free to reach out.</p>
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
                <div className="g-recaptcha" data-sitekey="6LdvF_YpAAAAAG2dFmMJir4MAsYweuOhwjShuLdb"></div>
                <button type="submit" className="contact-button resume-btn">Send Message</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
