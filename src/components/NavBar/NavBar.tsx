    import React from "react";
    import { Link } from "react-router-dom";

    const NavBar: React.FC = () => {

        return(
            <section className="nav">
                <p>
                    <Link to="#home">About</Link>
                </p>
                <p>
                <p>
                    <Link to = "#projects">Projects</Link>
                </p>
                    <Link to= "#blog">Blog</Link>
                </p>
            
                <button>
                    color
                </button>
            </section>
        )
    }

export default NavBar;