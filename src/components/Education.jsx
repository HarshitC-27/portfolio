import React from "react";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import FadeInSection from "./FadeInSection";
import "../styles/Education.css";

const education = [
  {
    institution: "Indian Institute of Management Indore",
    degree: "Master of Business Administration",
    period: "2026 — 2028",
    detail:
      "Building on an engineering foundation with strategy, leadership, and business problem-solving.",
  },
  {
    institution: "Indian Institute of Technology Kanpur",
    degree: "Bachelor of Technology",
    period: "2021 — 2025",
    detail: "",
  },
];

const Education = () => (
  <section id="education">
    <FadeInSection>
      <div className="section-header">
        <span className="section-title">/ education</span>
      </div>
      <div className="education-grid">
        {education.map((item, index) => (
          <article className="education-card" key={item.institution}>
            <div className="education-icon">
              <SchoolRoundedIcon />
            </div>
            <div className="education-period">{item.period}</div>
            <h3>{item.institution}</h3>
            <div className="education-degree">{item.degree}</div>
            <p>{item.detail}</p>
            <span className="education-count">0{index + 1}</span>
          </article>
        ))}
      </div>
    </FadeInSection>
  </section>
);

export default Education;
