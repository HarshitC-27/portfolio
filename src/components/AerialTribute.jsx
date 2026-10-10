import React from "react";
import FadeInSection from "./FadeInSection";
import aerialRoboticsPhoto from "../assets/moments/team-aerial-robotics.jpeg";
import "../styles/AerialTribute.css";

const AerialTribute = () => (
  <section id="aerial-robotics" className="aerial-tribute">
    <FadeInSection>
      <a
        className="aerial-tribute-link"
        href="https://www.ariitk.in"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit the Team Aerial Robotics IIT Kanpur website"
      >
        <div className="aerial-tribute-photo">
          <img
            src={aerialRoboticsPhoto}
            alt="Team Aerial Robotics members with their drones on a runway"
          />
        </div>
        <div className="aerial-tribute-caption">
          <div>
            <span>Team Aerial Robotics · IIT Kanpur</span>
            <h2>Built to fly, together.</h2>
          </div>
          <div className="aerial-tribute-cta">
            The team that started it all
            <strong>Visit ariitk.in ↗</strong>
          </div>
        </div>
      </a>
    </FadeInSection>
  </section>
);

export default AerialTribute;
