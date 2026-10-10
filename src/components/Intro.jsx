import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>
      <div className="intro-block">
        <div className="intro-kicker">software · robotics · strategy</div>
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["harshit"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            Software engineer, robotics enthusiast, and MBA candidate at IIM
            Indore. I enjoy building practical systems at the intersection of
            software, automation, and real-world problem-solving.
          </div>
          <div className="intro-tags" aria-label="Highlights">
            <span>IIT Kanpur</span>
            <span>IIM Indore</span>
            <span>Builder at heart</span>
          </div>
          <a
            href="mailto:harshitchaudhary0207@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
