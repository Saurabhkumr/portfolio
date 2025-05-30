"use client"
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="scroll-mt-25 z-0">
      <motion.h2
        className="flex justify-center mb-10 text-3xl text-orange-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
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
            <p>February, 2025 - April, 2025</p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
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
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
