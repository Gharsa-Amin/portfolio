// src/components/AboutMe/AboutMe.tsx
import React from "react";
import image from "../../assets/images/Headshot.jpg";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Recommendations from "../Recommendations/Recommendations";
import NavDots from "../NavDot/NavDot"; 
import "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const sectionIds = ["aboutMe", "skills", "projects", "recommendations"];

  return (
    <section className="aboutMe">
      <NavDots sectionIds={sectionIds} />
      <div id="aboutMe">
        <h1>Software Engineer</h1>
        <h3>Building software, systems, and great user experiences</h3>
        <img className="aboutMe__hero" src={image} alt="headshot" width="300px" />
        <p>
          I’m passionate about software development because it allows me to combine my problem-solving skills with my interest in building secure, impactful tools, especially in the blockchain space...
        </p>
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="recommendations">
        <Recommendations />
      </div>
    </section>
  );
};

export default AboutMe;
