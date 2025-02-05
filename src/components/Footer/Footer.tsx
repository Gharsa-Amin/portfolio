import "./Footer.scss"; 
import React from "react";
import { Link } from "react-router-dom";
import Github from "../Github/Github";
const FooterSection: React.FC = () => {


    return (
        <section className="footer">


    <div className="footer__wrapper">
  <div className="footer__items">  
<Link to="https://github.com/Gharsa-Amin">
<svg role="img" viewBox="0 0 24 24"  width="20px"   fill="blue"
      height="20px" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>


            </Link>
            </div>

<div className="footer__items">
    <Link to="https://www.linkedin.com/in/gharsanay-amin/">
    <svg role="img" viewBox="0 0 24 24"  width="20px"  fill="blue"
      height="20px" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M.396 24h4.982V7.93H.396zM2.887 6.225c1.655 0 2.663-1.09 2.663-2.44-1.49.01-2.66 1.09-2.66 2.44 0 1.35 1.005 2.44 2.65 2.44h.01zM7.92 24h4.98v-8.18c0-1.95.39-4.3 2.75-4.3 2.76 0 2.55 2.15 2.55 4.4V24h4.98V14.6c0-4.7-2.52-6.9-5.86-6.9-2.75 0-3.99 1.52-4.67 2.57h.03V7.93H7.92v16.07z"/></svg>
    </Link>
</div>
<div className="footer__items">
    <a href="mailto:ghars0718@gmail.com">
    <svg
    fill="blue"
    height="20px"
    width="20px"
    version="1.1"
    id="Icons"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
  >
    <path d="M29.9,18.1c-1.4-1.4-3.8-1.4-5.1,0L24,18.9l-0.8-0.8c-1.4-1.4-3.8-1.4-5.1,0c-1.4,1.4-1.4,3.8,0,5.2l5.2,5.4c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l5.2-5.4C31.3,21.9,31.3,19.5,29.9,18.1z"/>
    <path d="M16.6,24.7c-1.5-1.6-1.9-3.8-1.3-5.7C15.2,19,15.1,19,15,19c-0.2,0-0.5-0.1-0.7-0.2l-1.6-1.4l-5.1,4.4C7.5,21.9,7.2,22,7,22c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.3-1,0.1-1.4l4.9-4.2l-4.9-4.2c-0.4-0.4-0.5-1-0.1-1.4c0.4-0.4,1-0.5,1.4-0.1l7.3,6.4l7.3-6.4c0.4-0.4,1-0.3,1.4,0.1c0.4,0.4,0.3,1-0.1,1.4l-3.8,3.3c0.3,0,0.5-0.1,0.8-0.1c1.2,0,2.4,0.4,3.4,1.1c1-0.7,2.1-1.1,3.4-1.1c0.2,0,0.4,0,0.6,0V9c0-1.7-1.3-3-3-3H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h12.9L16.6,24.7z"/>
  </svg>
    </a>
</div>
</div>




        </section>
    )
}
export default FooterSection;