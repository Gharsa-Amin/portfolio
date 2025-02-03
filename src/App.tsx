// src/App.tsx
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import FooterSection from "./components/Footer/Footer";

import AboutMe from "./components/AboutMe/AboutMe";
import BlogPost from "./components/BlogPost/BlogPost";
import ScrollTriggerPopup from "./components/TrackScrolling/TrackScrolling";

	function App() {
	return (
		<BrowserRouter>
		<NavBar />
		<Routes>
			
			<Route path="/aboutme" element={<AboutMe />} />
			<Route path="/blog/:postId" element={<BlogPost />} />
		</Routes>
		<ScrollTriggerPopup />
		<FooterSection />
		</BrowserRouter>
	);
	}

export default App;
