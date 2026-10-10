import React from "react";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";

import { useMediaQuery } from "@mui/material";

const SidebarNav = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    window.history.replaceState(null, "", `#${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const links = [
    <a key="1" href="#intro" onClick={(event) => scrollToSection(event, "intro")}><span className="nav-slash">/</span>home</a>,
    <a key="2" href="#about" onClick={(event) => scrollToSection(event, "about")}><span className="nav-slash">/</span>about</a>,
    <a key="3" href="#experience" onClick={(event) => scrollToSection(event, "experience")}><span className="nav-slash">/</span>experience</a>,
    <a key="4" href="#projects" onClick={(event) => scrollToSection(event, "projects")}><span className="nav-slash">/</span>projects</a>,
    <a key="5" href="#education" onClick={(event) => scrollToSection(event, "education")}><span className="nav-slash">/</span>education</a>,
    <a key="6" href="#contact" onClick={(event) => scrollToSection(event, "contact")}><span className="nav-slash">/</span>contact</a>
  ];

  return (
    <div className="sidebar-nav">
      {!isMobile && (
        <div className="sidebar-links">
          {links.map((link, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div>{link}</div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
