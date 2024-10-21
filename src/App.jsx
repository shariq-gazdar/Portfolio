import { useState } from "react";
import About from "./components/About";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "./scroll.css";
import Project from "./components/Project";
function App() {
  return (
    <div className="main bg-black text-white w-screen overflow-auto">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
