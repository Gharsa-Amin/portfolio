    import "./Projects.scss"; 
    import React from "react";
    import { Link } from "react-router-dom";
    import crypto from "../../assets/images/CryptoTrading.png"
    import InStock from "../../assets/images/InStock.png"; 
    import Snaps from "../../assets/images/Snaps.png"; 
    import SVGforProjectTitle from "../SVGforProjectTitle/SVGforProjectTitle";
    import SVGforProjectPara from "../SVGProjectPara/SVGProjectPara";
    import SVGProjectNavigation from "../SVGProjectNavigation/SVGProjectNavigation";
    import Github from "../Github/Github";
    import SVGProjectLiveDemo from "../SVGProjectLiveDemo/SVGProjectLiveDemo";


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
        <Github />
                </Link>
        </p>
                        <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Demo
                            <SVGProjectLiveDemo />
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
    <Github />
                </Link></p>
                        <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Demo
                            <SVGProjectLiveDemo />
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
    <Github />
                </Link></p>
                        <a href="https://www.loom.com/share/1bc8eaf48c16401ab8231fd55a9dafd3?sid=b2fd3e03-f882-440a-8d9d-b955ffc2ed33" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Demo
                            <SVGProjectLiveDemo />
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
