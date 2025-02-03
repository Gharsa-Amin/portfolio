import "./Projects.scss"; 
import React from "react";
import { Link } from "react-router-dom";
import crypto from "../../assets/images/CryptoTrading.png"
import InStock from "../../assets/images/InStock.png"; 
import Snaps from "../../assets/images/Snaps.png"; 
import Github from "../Github/Github";

const Projects: React.FC = () => {
    return (
    <section className="projects-wrapper">
        <section className="projects">
            <div className="projects__header">
                My Projects  
            </div>
            <section className="projects__card"> 

<div className="projects__content">
                <h2 className="projects__title">GD Chain</h2>
                
                <p className="projects__paragraph">A full-stack, mobile-first crypto-trading platform with real-time trading functionalities and a blockchain featuring a decentralized network where transactions are securely recorded and are using proof-of-existence.</p>
                <p className="projects__paragraph">Tech Stack: React, Express.js, Node.js, MySQL, Chart.js, OAuth, JWT, External APIs</p>
                <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                    <button>Live Demo</button>
                </a>
                </div>
                <div className="projects__image">
                <img className="projects__image"  src={crypto} width="300px" alt="" />
                
                </div>
            </section>








            <section className="card"> 
                <h2>SNAPS</h2>
                <img src={Snaps} width="50px" alt="" />

                <p>A full-stack, mobile-first crypto-trading platform with real-time trading functionalities and a blockchain featuring a decentralized network where transactions are securely recorded and are using proof-of-existence.</p>
                <p>Tech Stack: React, Express.js, Node.js, MySQL, Chart.js, OAuth, JWT, External APIs</p>
                <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                    <button>Live Demo</button>
                </a>
                <div>
                <Github />
                </div>
            </section>




<section className="card"> 
<h2>In Stock</h2>
<img src={InStock} width="50px" alt="" />
<p>A full-stack, mobile-first crypto-trading platform with real-time trading functionalities and a blockchain featuring a decentralized network where transactions are securely recorded and are using proof-of-existence.</p>
<p>Tech Stack: React, Express.js, Node.js, MySQL, Chart.js, OAuth, JWT, External APIs</p>
<a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
    <button>Live Demo</button>
</a>
<div>
    <Github />
    
</div>
</section>
</section>
</section>
    );
};

export default Projects;
