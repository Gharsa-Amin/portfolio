// src/App.tsx
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import FooterSection from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";

	function App() {
	return (
		<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<Skills />} />
			<Route path="/" element={<AboutMe />} />
			<Route path="/blog" element={<div>Blog Page</div>} />
			<Route path="/projects" element={<div>Projects Page</div>} />
		</Routes>
		<FooterSection />
		</BrowserRouter>
	);
	}

export default App;
