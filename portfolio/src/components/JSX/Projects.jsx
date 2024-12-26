//import React from "react";
import "../CSS/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ecoerigreen from "../../assets/ecoerigreen.jpeg";
import alkebu from "../../assets/alkebu.jpeg";
import ongoza from "../../assets/ongoza.jpeg";
import iphot from "../../assets/iphot.jpeg";
import gym from "../../assets/gym.jpeg";

const projects = [
  {
    title: "EcoEriGreen Limited",
    imgSrc: ecoerigreen,
    githubLink: "https://github.com/Bil-prog/ecoerigreen",
    liveDemoLink: "https://ecoerigreen.co.ke/",
  },
  {
    title: "Alkebu Leadership Center",
    imgSrc: alkebu,
    githubLink: "https://github.com/Bil-prog/alkebu",
    liveDemoLink: "https://master--alkebu.netlify.app/",
  },
  {
    title: "Ongoza CyberHub",
    imgSrc: ongoza,
    githubLink: "https://github.com/Bil-prog/",
    liveDemoLink: "https://www.ongozacyberhub.org/",
  },
  {
    title: "iPhot Studio",
    imgSrc: iphot,
    githubLink: "https://github.com/Bil-prog/",
    liveDemoLink: "https://iphot.vercel.app/",
  },
  {
    title: "Gym App",
    imgSrc: gym,
    githubLink: "https://github.com/Bil-prog/Gym-app",
    liveDemoLink: "https://gym-app-rho-two.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <p style={{ textAlign: 'center' }} className="section-intro">Browse some of my</p>
      <h1 className="title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h1>
      <div className="pr-cont">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub size={23} />
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
