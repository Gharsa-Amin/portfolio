// src/App.tsx
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

	function App() {
	return (
		<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<div>Home Page</div>} />
			<Route path="/blog" element={<div>Blog Page</div>} />
			<Route path="/projects" element={<div>Projects Page</div>} />
		</Routes>
		</BrowserRouter>
	);
	}

export default App;
