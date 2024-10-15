import { useState } from "react";
import About from "./components/About";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "./scroll.css";
function App() {
  return (
    <div className="main bg-black text-white w-screen overflow-auto">
      <Nav />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
