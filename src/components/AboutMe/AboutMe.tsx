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
      <svg
  width="200px"
  height="100px"
  viewBox="0 0 5120 337"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="s1uqj89y s1q6y8ki"
>
  <path
  d="M2262 93C2122.5 82.5987 2116 21.5 2096.5 21.5C2077 21.5 2070.5 77.5238 1920.5 93C1794.5 106 1786 62 1771.5 63.5C1757 65 1687 155.5 1580 142C1473 128.5 1446.5 90 1435 93C1423.5 96 1448.03 199.005 1340 214C1181.5 236 1155.5 142 1144 142C1132.5 142 1105.5 269 946.5 236C787.5 203 799 115 784 114.5C769 114 732.5 162 544 158C382 154.562 352.5 81 341 84.5C329.5 88 358 269 168 326C-22 383 -75.5 180 -75.5 180V0.5H5189.5L5193.5 46C5193.5 46 5200 94 5069.5 100.5C4939 107 4923.5 21.5 4906.5 21.5C4889.5 21.5 4870 35 4835 93.5C4800 152 4765.5 169.5 4643.5 173.5C4521.5 177.5 4436.5 69 4425.5 76.5C4414.5 84 4413.5 212 4235 222C4056.5 232 4045.5 92 4033.5 89C4021.5 86 3968.5 169.5 3823.5 172.5C3678.5 175.5 3573.5 104 3562.5 106.5C3551.5 109 3553.5 167.5 3396 201C3238.5 234.5 3171.5 168.5 3161 172.5C3150.5 176.5 3164 273 3076.5 294.5C2975.99 319.197 2935 228 2920 225.5C2905 223 2862 276.955 2749 245C2671.4 223.057 2672.5 149 2660.5 151.5C2648.5 154 2622.5 181.04 2548.5 158C2425 119.548 2427.5 53.5 2412 51C2396.5 48.5 2376 101.5 2262 93Z"
  fill="#007bff"  // Blue color
  />
</svg>

        <h1>Software Engineer</h1>
        <h3>Building software, systems, and great user experiences</h3>
        <img className="aboutMe__hero" src={image} alt="headshot" width="300px" />
        <p>
        I’m passionate about software development because it allows me to combine my problem-solving skills with my interest in building secure, impactful tools, especially in the blockchain space. My journey into programming started during my graduate degree, where I dabbled in coding but ultimately shifted focus toward compliance and trading. During this time, I realized that the tools available in the blockchain space weren’t doing enough to bridge the gap between compliance, trading, security, and innovation. This sparked my passion for software development—I wanted to build the solutions that could protect customers while fostering innovation.
After self-teaching and completing a software engineering bootcamp, I gained hands-on experience with technologies like React, Node.js, Rust, and MySQL, and I’m now excited to apply my finance background and problem-solving skills to create high-impact software solutions.

As part of my Capstone Project, I built a full-stack, mobile-first crypto trading platform with real-time trading functionality, integrating external APIs for market data and execution. I implemented secure user authentication using JWT and OAuth, while ensuring a seamless, responsive design with React.js. The backend was powered by Node.js and MySQL for secure API management and real-time data processing.
I also developed a blockchain using Rust, focusing on security, speed, and reliability, featuring a decentralized network where transactions are securely recorded using proof-of-existence.
In my industry project with ScotiaBank, I developed an app that streamlined interactions between wealth management advisors and clients by automating processes and reducing redundancies, ultimately improving efficiency and user experience.
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
