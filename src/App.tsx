
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


import AboutMe from "./components/AboutMe/AboutMe";
import BlogPost from "./components/BlogPost/BlogPost";
import BlogPage from "./pages/BlogPage" 
import ScrollTriggerPopup from "./components/TrackScrolling/TrackScrolling";
import WelcomePopUp from "./components/PopUp/PopUp";
import image from "./assets/images/compressed_fe5dcd7af69bf74706077bdfdeaa73b5.webp"
function App() {
  return (
    <BrowserRouter>
     <WelcomePopUp imageUrl={image} />
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
	  <ScrollTriggerPopup />
     
	  
    </BrowserRouter>
  );
}

export default App;
