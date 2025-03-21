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
        I’m passionate about software development because it allows me to combine my problem-solving skills with my interest in building secure, impactful tools, especially in the blockchain space. My journey into programming started during my graduate degree, where I dabbled in coding but ultimately shifted focus toward compliance and trading. During this time, I realized that the tools available in the blockchain space weren’t doing enough to bridge the gap between compliance, trading, security, and innovation. This sparked my passion for software development—I wanted to build the solutions that could protect customers while fostering innovation.
After self-teaching and completing a software engineering bootcamp, I gained hands-on experience with technologies like React, Node.js, Rust, and MySQL, and I’m now excited to apply my finance background and problem-solving skills to create high-impact software solutions. I am interested to explore the intersection of quantum and blockchain.
        </p></div>
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
