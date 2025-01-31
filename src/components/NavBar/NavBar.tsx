import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // You can still use Link here for consistent styling
import "./NavBar.scss"; 
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

  const lightThemeGif =  "https://media.giphy.com/media/abBeARbqBhp8Qyr1k3/giphy.gif?cid=790b761142doo36grodftyzlonx61fcmycr40iy2assf1di6&ep=v1_gifs_search&rid=giphy.gif&ct=g"; 
  const darkThemeGif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzgya2duYWV6MDl6YjV3N3E4bm5tdmxlaGdqcGJoMDQyMHp1bDd2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pzC2KawpHBsli/giphy.gif"
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
      <div className="theme-gif">
        <img
          src={theme === "light" ? lightThemeGif : darkThemeGif}
          alt={theme === "light" ? "Light theme GIF" : "Dark theme GIF"}
          onClick={toggleTheme}
        />
      </div>
    </section>
  );
};

export default NavBar;
