/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../CSS/Expertise.css';
import approval from '../../assets/approval-png.png'

 
const skills = [
  {
    category: "Languages & Frameworks",
    details: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "Javascript", level: "Experienced" },
      { name: "React JS", level: "Experienced" },
      { name: "Next.JS", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ]
  },
  {
    category: "Tools & Technologies",
    details: [
      { name: "Git, Github", level: "Experienced" },
      { name: "RESTful APIs", level: "Intermediate" },
      { name: "Jest", level: "Beginner" },
      { name: "AWS", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Responsive Design", level: "Experienced" },
    ]
  }
];
const SkillCard = ({ category, details }) => (
  <div className="skill-card tile">
    <h2 className="skill-category">{category}</h2>
    <div className="skills-list"> 
      {details.map((detail, index) => (
        <div key={index} className="skill-item">
          <img src={approval} alt="sunicon" className="skill-icon" />
          <div className="skill-info">
            <h3 className="skill-name">{detail.name}</h3>
            <p className="skill-level">{detail.level}</p>
          </div>
        </div>
      ))}
    </div> 
  </div>
);

const Expertise = () => ( 
  <div className="expertise-section" id='expertise'>
    <p className="section-intro">Explore my</p>
    <h1 className="section-title title">Expertise</h1>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <SkillCard key={index} category={skill.category} details={skill.details} />
      ))}
    </div>
  </div>
);

export default Expertise;

