/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../CSS/Projects.css';
import ecommerceImage from '../../assets/ecommerce.png';
import ngoImage from '../../assets/ngo.webp';
import gymImage from '../../assets/gym.jpg';

const projects = [
  {
    title: "E-commerce Website", 
    imgSrc: ecommerceImage,
    githubLink: "https://github.com/Bil-prog/ecoerigreen",
    liveDemoLink: "https://ecoerigreen.co.ke/"
  },
  {
    title: "NGO Website",
    imgSrc: ngoImage,
    githubLink: "https://github.com/Bil-prog/alkebu",
    liveDemoLink: "https://master--alkebu.netlify.app/"
  },
  {
    title: "Gym App",
    imgSrc: gymImage,
    githubLink: "https://github.com/Bil-prog/Gym-app",
    liveDemoLink: "https://gym-r7e2nwffn-bilhas-projects.vercel.app/"
  }
];

const ProjectCard = ({ title, imgSrc, githubLink, liveDemoLink }) => (
  <div className="proj-details-container tile">
    <div className="img-container">
      <img src={imgSrc} alt={`${title} image`} className="project-img" />
    </div>
    <h2 className="project-title text">{title}</h2>
    <div className="btn-container">
      <button className="project-btn" onClick={() => window.open(githubLink, "_blank", "noopener,noreferrer")}>Github</button>
      <button className="project-btn" onClick={() => window.open(liveDemoLink, "_blank", "noopener,noreferrer")}>Demo</button>
    </div>
  </div>
); 

export default function Projects() {
  return (
    <div className="project-cards-container" id='projects'>
      <p style={{ textAlign: 'center' }} className="section-intro">Browse some of my</p>
      <h1 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h1>
      <div className="project-article">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            imgSrc={project.imgSrc}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
}
