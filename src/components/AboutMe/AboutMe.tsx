import React from "react";
import image from "../../assets/images/Headshot.jpg"
    const AboutMe: React.FC = () => {

        return(
            <section className="aboutMe">
        <img src={image} alt="headshot" width="300px"/>
                <p>
                I’m passionate about software development because it allows me to combine my problem-solving skills with my interest in building secure, impactful tools, especially in the blockchain space. My journey into programming started during my graduate degree, where I dabbled in coding but ultimately shifted focus toward compliance and trading. During this time, I realized that the tools available in the blockchain space weren’t doing enough to bridge the gap between compliance, trading, security, and innovation. This sparked my passion for software development—I wanted to build the solutions that could protect customers while fostering innovation.
                After self-teaching and completing a software engineering bootcamp, I gained hands-on experience with technologies like React, Node.js, Rust, and MySQL, and I’m now excited to apply my finance background and problem-solving skills to create high-impact software solutions.   
              </p>
            </section>
        )
    }

export default AboutMe;