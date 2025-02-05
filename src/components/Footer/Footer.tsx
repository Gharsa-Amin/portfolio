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
Github
            </Link>
            </div>

<div className="footer__items">
    <Link to="https://www.linkedin.com/in/gharsanay-amin/">
  LinkedIn
    </Link>
</div>
<div className="footer__items">
    <a href="mailto:ghars0718@gmail.com">
   Email
    </a>
</div>
</div>




        </section>
    )
}
export default FooterSection;