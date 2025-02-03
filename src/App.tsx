
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FooterSection from "./components/Footer/Footer";

import AboutMe from "./components/AboutMe/AboutMe";
import BlogPost from "./components/BlogPost/BlogPost";
import BlogPage from "./pages/BlogPage" 
import ScrollTriggerPopup from "./components/TrackScrolling/TrackScrolling";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
	  <ScrollTriggerPopup />
      {/* <FooterSection /> */}
	  
    </BrowserRouter>
  );
}

export default App;
