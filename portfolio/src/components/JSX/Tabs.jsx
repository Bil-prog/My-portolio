// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../CSS/Tabs.css'

const tabs = [
  { name: 'skills', label: 'Skills', content: (
    <ul>
      <li><span> - Web Development</span><br />Frontend with React JS</li>
      <li><span> - Cybersecurity</span><br />Defensive and Offensive</li>
    </ul>
  )},
  { name: 'experience', label: 'Experience', content: (
    <ul>
      <li><span> - Jan 2024 - Apr 2024</span><br />Technical Intern - Communications Authority</li>
      <li><span> - Oct 2023 - Nov 2023</span><br />Cybersecurity Intern - Senselearner Technologies</li>
      <li><span> - Jan 2020 - Sep 2021</span><br />Frontend Developer - Finetek Labs</li>
    </ul>
  )},
  { name: 'education', label: 'Education', content: (
    <ul>
      <li><span> - May 2023 - Aug 2023</span><br />Certified Security Analyst<br />USIU, CyberShujaa Program</li>
      <li><span> - Sep 2019 - Dec 2023</span><br />Bsc. Mathematics and Computer Science<br />Kenyatta University</li>
    </ul>
  )}
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab-container">
      <div className="tab-titles text">
        {tabs.map(tab => (
          <p 
            key={tab.name} 
            className={`tab-links ${activeTab === tab.name ? 'active-link' : ''}`} 
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.label}
          </p>
        ))} 
      </div>
      <div className="tab-contents-container">
        {tabs.map(tab => (
          <div 
            key={tab.name} 
            className={`text tab-contents ${activeTab === tab.name ? 'active-tab' : ''}`}
            id={tab.name}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
