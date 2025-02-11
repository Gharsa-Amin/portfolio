    import "./Projects.scss"; 
    import React from "react";
    import { Link } from "react-router-dom";
    import crypto from "../../assets/images/CryptoTrading.png"
    import InStock from "../../assets/images/InStock.png"; 
    import Snaps from "../../assets/images/Snaps.png"; 
    import TorontoLovesLocal from "../../assets/images/TorontoLovesLocal.png"
    import Bandsite from "../../assets/images/Bandsite.png"; 
    import Portfolio from "../../assets/images/Portfolio.png"; 
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
                        <h2 className="projects__title">Portfolio Website</h2>
                        
                        <p className="projects__paragraph">
                        <SVGforProjectTitle />
                        This website is designed and built from scratch by me. I am planning to make the website responsive for mobile, desktop, and tablet screens. Currently, it is only in desktop version. I also intend to proactively publish my blogs here about software engineering.</p>                        <p className="projects__paragraph">
                    <SVGforProjectPara />
        Tech Tools: Typscript, Github, React, SASS, Figma, Design Thinking</p>
        <p className="projects__paragraph"> <SVGProjectNavigation />
        Visit Github:  <Link to="https://github.com/Gharsa-Amin/portfolio"  target="_blank">
        <Github />
                </Link>
        </p>
                        <a href="https://gharsaamin.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Website
                            <SVGProjectLiveDemo />
                            </button>
                        </a>
                        </div>
                        <div className="projects__image">
                        <img className="projects__image"  src={Portfolio} alt="Screenshot of the GD Chain project interface" />
                        </div>
                    </section>
                    <section className="projects__card"> 
        <div className="projects__content">
                        <h2 className="projects__title">Toronto ❤ Local</h2>
                        
                        <p className="projects__paragraph">
                        <SVGforProjectTitle />
                        Team Project: A web-based platform developed to promote local businesses, utilizing a responsive, mobile-first design with an integrated directory system. The platform incorporates a secure, scalable backend to manage business listings and user interactions. </p>
                        <p className="projects__paragraph">
                    <SVGforProjectPara />
        Tech Tools: React, Express.js, Node.js, PHP, WordPress, Figma</p>
        <p className="projects__paragraph"> <SVGProjectNavigation />
        Visit Github:  <Link to="https://github.com/Gharsa-Amin/Toronto-Loves-Local-"  target="_blank">
        <Github />
                </Link>
        </p>
                        <a href="https://torontoloveslocal.ca/" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Website
                            <SVGProjectLiveDemo />
                            </button>
                        </a>
                        </div>
                        <div className="projects__image">
                        <img className="projects__image"  src={TorontoLovesLocal} alt="Screenshot of the GD Chain project interface" />
                        </div>
                    </section>
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
                        <a href="https://www.linkedin.com/posts/activity-7285869262257221632-VLBJ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
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
            Team Project:An Inventory Management System, a full-stack application with a modern React front-end communicating with a robust Express back-end using Agile development, and Jira Scrumboard.</p>
                        <p className="projects__paragraph">
                        <SVGforProjectPara />
        Tech Tools: React, Express.js, Node.js, MySQL, Jira, Figma, External APIs, Agile Development</p>
        <p className="projects__paragraph"><SVGProjectNavigation />
        Visit Github: <Link to="https://github.com/Gharsa-Amin/InStock"  target="_blank">
    <Github />
                </Link></p>
                        <a href="https://www.linkedin.com/posts/activity-7276699414851731456--PwS?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://www.linkedin.com/posts/activity-7273889164922626048-DEb5?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Demo
                            <SVGProjectLiveDemo />
                            </button>
                        </a>
                        </div>
                        <div className="projects__image">
                        <img className="projects__image"  src={Snaps} alt="Screenshot of the SNAPS project interface" />
                        </div>
                    </section>
                    <section className="projects__card"> 
        <div className="projects__content">
                        <h2 className="projects__title">Bandsite</h2>
                        
                        <p className="projects__paragraph"> 
                        <SVGforProjectTitle />
A responsive website for a mock band, that incorporated a functional and dynamic comments sections, with a shows page.The shows page dynamically plays videos in the background. </p>
                        <p className="projects__paragraph">
                        <SVGforProjectPara />
        Tech Tools:HTML, CSS, Javascript, SASS, Git</p>
        <p className="projects__paragraph"><SVGProjectNavigation />
        Visit Github: <Link to="https://github.com/Gharsa-Amin/gharsa-amin-bandsite"  target="_blank">
    <Github />
                </Link></p>
                        <a href="https://gharsa-amin.github.io/gharsa-amin-bandsite/" target="_blank" rel="noopener noreferrer">
                            <button className="projects__button">Live Website
                            <SVGProjectLiveDemo />
                            </button>
                        </a>
                        </div>
                        <div className="projects__image">
                        <img className="projects__image"  src={Bandsite} alt="Screenshot of the InStock project interface" />
                        </div>
                    </section>
    </section>
    </section>
        );
    };

    export default Projects;
