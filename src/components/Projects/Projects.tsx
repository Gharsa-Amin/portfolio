import "./Projects.scss"; 
import React from "react";
import { Link } from "react-router-dom";
import crypto from "../../assets/images/CryptoTrading.png"
import InStock from "../../assets/images/InStock.png"; 
import Snaps from "../../assets/images/Snaps.png"; 


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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" 
        />
        </svg>
                            A full-stack, mobile-first crypto-trading platform with real-time trading functionalities and a blockchain featuring a decentralized network where transactions are securely recorded and are using proof-of-existence.</p>
                    <p className="projects__paragraph">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" 
    />
    </svg>
    Tech Tools: React, Express.js, Node.js, MySQL, Chart.js, OAuth, JWT, External APIs</p>
    <p className="projects__paragraph"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" 
    />
    </svg>
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
                    <img className="projects__image"  src={crypto} width="300px" alt="" />
                    </div>
                </section>
                <section className="projects__card"> 
    <div className="projects__content">
                    <h2 className="projects__title">In Stock</h2>
                    
                    <p className="projects__paragraph">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" 
        />
        </svg>
        An Inventory Management System, a full-stack application with a modern React front-end communicating with a robust Express back-end using Agile development, and Jira Scrumboard.</p>
                    <p className="projects__paragraph">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" 
    />
    </svg>
    Tech Tools: React, Express.js, Node.js, MySQL, Jira, Figma, External APIs, Agile Development</p>
    <p className="projects__paragraph"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" 
    />
    </svg>
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
                    <img className="projects__image"  src={InStock} width="300px" alt="" />
                    </div>
                </section>

                <section className="projects__card"> 
    <div className="projects__content">
                    <h2 className="projects__title">SNAPS</h2>
                    
                    <p className="projects__paragraph">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20px" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" 
        />
        </svg>
         Building a prototype for a new photo sharing application called Snaps. Snaps’ Creative Director has provided a package and mockup of how they envision the final product using React, API endpoints, Express, and Node.</p>                    <p className="projects__paragraph">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" 
    />
    </svg>
    Tech Tools: React, Express.js, Node.js, MySQL, APIs, Sass</p>
    <p className="projects__paragraph"><svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" 
    />
    </svg>
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
                    <img className="projects__image"  src={Snaps} width="300px" alt="" />
                    </div>
                </section>
</section>
</section>
    );
};

export default Projects;
