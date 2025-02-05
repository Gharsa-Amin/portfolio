import "./Projects.scss"; 
import React from "react";
import { Link } from "react-router-dom";
import crypto from "../../assets/images/CryptoTrading.png"
import InStock from "../../assets/images/InStock.png"; 
import Snaps from "../../assets/images/Snaps.png"; 
import SVGforProjectTitle from "../SVGforProjectTitle/SVGforProjectTitle";
import SVGforProjectPara from "../SVGProjectPara/SVGProjectPara";
import SVGProjectNavigation from "../SVGProjectNavigation/SVGProjectNavigation";


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
                    
                    <p className="projects__paragraph">
                    <SVGforProjectTitle />
                            A full-stack, mobile-first crypto-trading platform with real-time trading functionalities and a blockchain featuring a decentralized network where transactions are securely recorded and are using proof-of-existence.</p>
                    <p className="projects__paragraph">
                <SVGforProjectPara />
    Tech Tools: React, Express.js, Node.js, MySQL, Chart.js, OAuth, JWT, External APIs</p>
    <p className="projects__paragraph"> <SVGProjectNavigation />
    Visit Github:  <Link to="https://github.com/Gharsa-Amin/Capstone-Front-End-"  target="_blank">
<svg role="img" viewBox="0 0 24 24"  width="20px"
      height="20px" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link>
    </p>
                    <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                        <button className="projects__button">Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width="20px" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" 
    />
    </svg>
                        </button>
                    </a>
                    </div>
                    <div className="projects__image">
                    <img className="projects__image"  src={crypto} alt="Screenshot of the GD Chain project interface" />
                    </div>
                </section>
                <section className="projects__card"> 
    <div className="projects__content">
                    <h2 className="projects__title">In Stock</h2>
                    
                    <p className="projects__paragraph">
                    <SVGforProjectTitle />
        An Inventory Management System, a full-stack application with a modern React front-end communicating with a robust Express back-end using Agile development, and Jira Scrumboard.</p>
                    <p className="projects__paragraph">
                    <SVGforProjectPara />
    Tech Tools: React, Express.js, Node.js, MySQL, Jira, Figma, External APIs, Agile Development</p>
    <p className="projects__paragraph"><SVGProjectNavigation />
    Visit Github: <Link to="https://github.com/Gharsa-Amin/InStock"  target="_blank">
<svg role="img" viewBox="0 0 24 24"  width="20px"
      height="20px" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link></p>
                    <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                        <button className="projects__button">Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width="20px" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" 
    />
    </svg>
                        </button>
                    </a>
                    </div>
                    <div className="projects__image">
                    <img className="projects__image"  src={InStock} alt="Screenshot of the InStock project interface" />
                    </div>
                </section>

                <section className="projects__card"> 
    <div className="projects__content">
                    <h2 className="projects__title">SNAPS</h2>
                    
                    <p className="projects__paragraph">
                    <SVGforProjectTitle />
         Building a prototype for a new photo sharing application called Snaps. Snaps’ Creative Director has provided a package and mockup of how they envision the final product using React, API endpoints, Express, and Node.</p>                    <p className="projects__paragraph">
         <SVGforProjectPara />
    Tech Tools: React, Express.js, Node.js, MySQL, APIs, Sass</p>
    <p className="projects__paragraph"><SVGProjectNavigation />
    Visit Github: <Link to="https://github.com/Gharsa-Amin/gharsa-amin-snaps"  target="_blank">
<svg role="img" viewBox="0 0 24 24"  width="20px"
      height="20px" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link></p>
                    <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                        <button className="projects__button">Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width="20px" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" 
    />
    </svg>
                        </button>
                    </a>
                    </div>
                    <div className="projects__image">
                    <img className="projects__image"  src={Snaps} alt="Screenshot of the SNAPS project interface" />
                    </div>
                </section>
</section>
</section>
    );
};

export default Projects;
