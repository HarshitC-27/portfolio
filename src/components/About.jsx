import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import aboutPhoto from "../assets/about/harshit-about.jpeg";

const About = () => {
  const one = (
    <p>
      I’m currently pursuing an <b>MBA at IIM Indore</b> after completing my
      B.Tech at <b>IIT Kanpur</b>. Before business school, I worked in software
      engineering at <b>Zinnia</b> and interned at <b>Amazon</b>.
    </p>
  );
  const two = (
    <p>
      A large part of my engineering journey has been with Team Aerial Robotics
      at IIT Kanpur, where I worked on autonomous drones, computer vision, and
      control systems before going on to lead the team. Outside work, I enjoy
      cycling, discovering music, and playing the drums.
    </p>
  );

  const techStack = [
    "Python",
    "C/C++",
    "SQL",
    "Angular",
    "Spring Boot",
    "ROS",
    "AWS",
    "ArduPilot",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <div className="about-photo-frame">
              <img
                src={aboutPhoto}
                alt="Harshit smiling while holding a puppy outdoors"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
