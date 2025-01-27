import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {

    return(
        <section className="nav">
            <p>
                <Link to="#home">Home</Link>
            </p>
            <p>
                <Link to= "#blog">Blog</Link>
            </p>
            <p>
                <Link to = "#projects">Projects</Link>
            </p>


        </section>
    )
}

export default NavBar;