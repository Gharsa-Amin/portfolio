// src/components/NavBar/NavBar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../assets/data/Blog.json"; 

import LightThemeIcon from "../LightTheme/LightTheme";
import DarkThemeIcon from "../DarkTheme/DarkTheme";  
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <section className="nav">
      <div className="nav__right">
        <p className="nav__right-items">
          <Link className="nav__right-items" to="/aboutme">Home</Link>
        </p>
      </div>
      <div className="nav__left">
        {/* Single Blog link */}
        <p className="nav__left-items">
          <Link  className="nav__right-items" to="/blog">Blog</Link>
        </p>

        <div className="theme-icon nav__left-items" onClick={toggleTheme}>
          {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
