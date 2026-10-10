import React, { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollPos = useRef(0);
  const pendingScroll = useRef(null);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const scroll = () => {
      window.history.replaceState(null, "", `#${sectionId}`);
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (expanded) {
      pendingScroll.current = scroll;
      setExpanded(false);
    } else {
      scroll();
    }
  };

  useEffect(() => {
    if (expanded) {
      scrollPos.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      if (pendingScroll.current) {
        const scroll = pendingScroll.current;
        pendingScroll.current = null;
        window.requestAnimationFrame(scroll);
      }
    }
  }, [expanded]);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand href="#intro" onClick={(event) => scrollToSection(event, "intro")}>
          Harshit Chaudhary
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro" onClick={(event) => scrollToSection(event, "intro")}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={(event) => scrollToSection(event, "about")}>About</Nav.Link>
            <Nav.Link href="#experience" onClick={(event) => scrollToSection(event, "experience")}>Experience</Nav.Link>
            <Nav.Link href="#projects" onClick={(event) => scrollToSection(event, "projects")}>Projects</Nav.Link>
            <Nav.Link href="#education" onClick={(event) => scrollToSection(event, "education")}>Education</Nav.Link>
            <Nav.Link href="#contact" onClick={(event) => scrollToSection(event, "contact")}>Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link
              href="mailto:harshitchaudhary0207@gmail.com"
              aria-label="Email Harshit"
            >
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/HarshitC-27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harshit's GitHub"
            >
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/harshit-c"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harshit's LinkedIn"
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
