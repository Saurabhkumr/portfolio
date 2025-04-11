import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  return (
    <div id="experience" className="scroll-mt-25 z-0">
      <h2 className="flex justify-center mb-10 mt-20 text-3xl text-orange-400">
        Experience
      </h2>
      <div className="mt-10">
        <VerticalTimeline className="relative z-0">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fb923c", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid #fb923c" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Internship - Frontend Developer
            </h3>
            <h3 className="vertical-timeline-element-subtitle">Mentorkart</h3>
            <p>Feb, 2025 - April, 2025</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fb923c", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid #fb923c" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Associate Software Developer
            </h3>
            <h3 className="vertical-timeline-element-subtitle">BitQit</h3>
            <p>April, 2025 - Present</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
