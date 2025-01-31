import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // You can still use Link here for consistent styling

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light"
  }); 

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme"); 
      document.body.classList.remove("light-theme"); 
    }
    else {
      document.body.classList.add("light-theme"); 
      document.body.classList.remove("dark-theme")
    }
    localStorage.setItem("theme", theme) 

  },[theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light" ))
  }
  return (
    <section className="nav">
      <p>
        <Link to="/aboutme">About</Link>
      </p>
      <p>
        <Link to="/#skills">Skills</Link>
      </p>
      <p>
        <Link to="/#projects">Projects</Link>
      </p>
      <p>
        <Link to="/#blog">Blog</Link>
      </p>
      <button>
        Toggle Color {/* You can still add color toggle functionality */}
      </button>
    </section>
  );
};

export default NavBar;
