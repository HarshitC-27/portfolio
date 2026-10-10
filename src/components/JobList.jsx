import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

const JobList = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems = {
    Zinnia: {
      jobTitle: "Software Engineer I @",
      duration: "JUN 2025 — MAY 2026",
      desc: [
        "Spearheaded a Camunda Center of Excellence, standardized BPMN practices, and conducted workshops for 100+ engineers and 10+ product managers.",
        "Engineered a full-stack automation tool using Angular, Spring Boot, and GitHub APIs, reducing development time by more than 90% and removing manual overhead from admin workflows.",
        "Safeguarded 40+ CI/CD pipelines through SonarQube and Allure automation, earning the Best Budding DevOps award for accelerating release cycles and reducing QA debugging time.",
      ],
    },
    Amazon: {
      jobTitle: "Software Development Engineer Intern @",
      duration: "MAY 2024 — JUL 2024",
      desc: [
        "Completed end-to-end transportation-leg analysis covering more than $500M across five European markets and $1B in monthly US operations.",
        "Built 5+ automated analytics dashboards and 20+ monitoring alerts for EU and Far East regions, reducing manual tracking effort by over 40%.",
        "Migrated 15+ manually coded DataCentral jobs to Dryad automation and evaluated service logic across 10 countries using complex SQL analysis.",
      ],
    },
    "Aerial Robotics": {
      jobTitle: "Team Head & Robotics Engineer @",
      duration: "JUN 2022 — MAR 2024",
      desc: [
        "Led a three-tier team of 35+ students researching aerial robotics and maintained a custom-built fleet of 10+ autonomous drones.",
        "Oversaw technical development across autonomous flight, drone swarms, computer vision, tracking, mapping, and control systems.",
        "Raised more than ₹15 lakh through sponsorships, grants, and prizes while helping the team reach the Robofest Gujarat finals and win Bronze at Inter-IIT Tech Meet 11.0.",
      ],
    },
    SURGE: {
      jobTitle: "Research Intern @",
      duration: "MAY 2023 — JUL 2023",
      desc: [
        "Designed the technology stack for autonomous drone control using two external cameras, two onboard cameras, and multiple sensors.",
        "Built the software and hardware stacks for a swarm of four nano quadcopters and stabilized a surveillance drone.",
        "Developed five custom libraries integrating laser and optical-flow sensors with the Pluto Primus flight controller.",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      flexGrow: 1, 
      bgcolor: "transparent", 
      display: "flex", 
      flexDirection: isMobile ? "column" : "row",
      height: "auto",
      minHeight: 300
    }}>
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{ 
          borderRight: isMobile ? 0 : 1, 
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--green-bright)"
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none"
          }
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab 
            key={i} 
            label={key} 
            {...a11yProps(i, isMobile)} 
            sx={{
              color: "var(--slate)",
              fontFamily: "NTR",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--green-bright)"
              },
              "&:hover": {
                color: "var(--green-bright)",
                backgroundColor: "var(--green-tint)"
              }
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {Object.keys(experienceItems).map((key, i) => (
          <TabPanel key={i} value={value} index={i} isMobile={isMobile}>
            <span className="joblist-job-title">
              {experienceItems[key]["jobTitle"] + " "}
            </span>
            <span className="joblist-job-company">{key}</span>
            <div className="joblist-duration">
              {experienceItems[key]["duration"]}
            </div>
            <ul className="job-description">
              {experienceItems[key]["desc"].map(function (descItem, i) {
                return (
                  <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                    <li>{descItem}</li>
                  </FadeInSection>
                );
              })}
            </ul>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default JobList;
