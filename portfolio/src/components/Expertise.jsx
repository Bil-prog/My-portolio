/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Expertise.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const skills = [
  {
    category: "Frontend Development",
    details: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "Javascript", level: "Intermediate" },
      { name: "Vue JS", level: "Intermediate" },
      { name: "React JS", level: "Basic" }
    ]
  },
  {
    category: "Cybersecurity",
    details: [
      { name: "Malware Analysis", level: "Intermediate" },
      { name: "Incidence Response", level: "Experienced" },
      { name: "Penetration Testing", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" }
    ]
  }
];

const SkillCard = ({ category, details }) => (
    <div className={`cards ${category.toLowerCase().replace(' ', '-')}`}>
        <h2 className="experience-sub-title">{category}</h2>
        <div className="article-container">
        {details.map((detail, index) => (
            <article key={index}>
            {/* <FontAwesomeIcon icon={faLightbulb} className="icon" style={{ fontSize: '26px' }} /> */}
            <div>
                <h3 className='detailName'>{detail.name}</h3>
                <p className='detailLevel'>{detail.level}</p>
            </div>
            </article>
        ))}
        </div>
    </div>
);

const Expertise = () => (
  <div className="expertise-container">
    {skills.map((skill, index) => (
      <SkillCard key={index} category={skill.category} details={skill.details} />
    ))}
  </div>
);

export default Expertise;

