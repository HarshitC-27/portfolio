import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FadeInSection from "./FadeInSection";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact">
    <FadeInSection>
      <div className="contact-eyebrow">what’s next?</div>
      <h2>Let’s build something interesting.</h2>
      <p>
        I’m always happy to talk about software, robotics, automation, or an
        ambitious idea that sits somewhere between them.
      </p>
      <a
        className="contact-button"
        href="mailto:harshitchaudhary0207@gmail.com"
      >
        <EmailRoundedIcon />
        Say hello
      </a>
      <div className="contact-socials">
        <a
          href="https://github.com/HarshitC-27"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Harshit's GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/harshit-c"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Harshit's LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
      <footer>
        <div>Built and designed by Harshit Chaudhary.</div>
        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </footer>
    </FadeInSection>
  </section>
);

export default Contact;
