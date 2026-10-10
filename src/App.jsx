import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import AerialTribute from "./components/AerialTribute";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import SidebarNav from "./components/SidebarNav";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SidebarNav />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <AerialTribute />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
