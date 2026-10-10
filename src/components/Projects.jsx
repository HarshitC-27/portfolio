import React from "react";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import FadeInSection from "./FadeInSection";
import roomAutomationPhoto from "../assets/projects/room-automation.png";
import fpvDronePhoto from "../assets/projects/maxresdefault.jpg";
import robofestPhoto from "../assets/projects/IMG-20230613-WA0004.jpg";
import interIITPhoto from "../assets/projects/interiit.jpeg";
import trackingPhoto from "../assets/projects/images.jpeg";
import "../styles/Projects.css";

const projects = [
  {
    title: "Room Automation",
    desc: "A self-directed automation project exploring how hardware and software can make everyday room interactions smarter and more responsive.",
    tech: "Automation · Hardware-Software Integration",
    repo: "https://github.com/HarshitC-27/Room-Automation",
    image: roomAutomationPhoto,
    imagePosition: "center 50%",
  },
  {
    title: "FPV Drone Navigation",
    desc: "Developed a vision pipeline for frame-center detection using HSV contrast, contour filtering, and Hough lines, supported by a ROS and Gazebo flight simulation stack.",
    tech: "C++ · ROS · OpenCV · Gazebo · Computer Vision",
    repo: "https://github.com/HarshitC-27/Surge_FPV",
    image: fpvDronePhoto,
    imagePosition: "center center",
  },
  {
    title: "Robofest Gujarat 3.0",
    desc: "Designed and built a five-drone swarm for autonomous search, pickup, and formation flight after winning the first-stage Gold Medal and an initial ₹50,000 grant.",
    tech: "ArduPilot · MAVLink · Drone Swarms · Simulation",
    repo: "https://github.com/AerialRobotics-IITK/robofest2_swarm",
    image: robofestPhoto,
    imagePosition: "center 56%",
  },
  {
    title: "Inter-IIT Tech Meet 11.0",
    desc: "Reduced actuation lag by 40% using a predictive MPC controller and achieved 85% spatial accuracy in drone positioning with Kalman-filtered estimation.",
    tech: "MPC · Kalman Filter · Multi-Wii · Multithreading",
    repo: "https://github.com/AerialRobotics-IITK/interiit_11.0",
    image: interIITPhoto,
    imagePosition: "center 58%",
  },
  {
    title: "Aerial Tracking & Mapping",
    desc: "Built a ROS tracking package with over 95% bounding-box precision at 30+ FPS and mapped a 10 m × 10 m environment using a monocular camera in Gazebo.",
    tech: "ROS · CSR-DCF · Gazebo · Computer Vision",
    repo: "https://github.com/AerialRobotics-IITK/2022_tracking",
    image: trackingPhoto,
    imagePosition: "center 50%",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
        <a
          href="https://github.com/HarshitC-27"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
      </div>

      <ul className="projects-grid">
        {projects.map((project, i) => (
          <FadeInSection key={project.title} delay={`${(i + 1) * 80}ms`}>
            <li className="projects-card">
              <div
                className={`project-photo-placeholder${project.image ? " has-photo" : ""}`}
                aria-hidden={!project.image}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project hardware`}
                    style={{
                      objectPosition: project.imagePosition || "center",
                    }}
                  />
                ) : (
                  <>
                    <AddPhotoAlternateRoundedIcon />
                    <span>project photo</span>
                  </>
                )}
              </div>
              <div className="project-card-content">
                <div className="card-header">
                  <FolderOpenRoundedIcon
                    className="folder-icon"
                    sx={{ fontSize: 35 }}
                  />
                  <span className="project-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="card-title">{project.title}</div>
                <div className="card-desc">{project.desc}</div>
                <div className="project-card-footer">
                  <div className="card-tech">{project.tech}</div>
                  {project.repo && (
                    <a
                      className="project-repo-link"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </li>
          </FadeInSection>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
