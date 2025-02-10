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
      <div className="aboutMe__wrapper">
        <h1 className="aboutMe__header">Software Engineer</h1>
        <h2 className="aboutMe__header">Building softwares, systems, and <span>great user experiences</span></h2></div>
<div className="aboutMe__hero">
        <img className="aboutMe__hero-image" src={image} alt="headshot" width="300px" />
        <p className="aboutMe__hero-paragraph">
Hey! I am Gharsa, I have a deep passion for solving complex problems, a curious and a creative mind to build softwares, a compassionate perspective to uplift every team I work with.        </p></div>
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
