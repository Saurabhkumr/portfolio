"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

const Project = () => {
  const project = [
    {
      title: "DevCollab",
      desc: "Developers often face challenges when collaborating on code in real time due to a lack of synchronization, multi-user editing, and real-time execution support. Built a platform where multiple users can edit and execute code simultaneously in a shared workspace using WebSockets, Monaco Editor, and Judge0 API. Enables seamless pair programming, remote collaboration, and technical interviews.",
      img: "/project/devcollab.png",
      url: "https://github.com/Saurabhkumr/DevCollab",
    },
    {
      title: "Homii",
      desc: "Built a comprehensive real estate platform enabling property listings, advanced search functionality, adding properties, modifying properties, and booking properties. Integrated an interactive map to help users locate properties based on their preferences and geographical proximity and containerized the application using Docker.",
      img: "/project/homii.png",
      url: "https://github.com/Saurabhkumr/Homii--real-estate-web-application",
    },
    {
      title: "Well Mind Wave",
      desc: "Mental health issues often go undetected due to the lack of accessible and affordable diagnostic tools. Developed a web application that analyzes user responses to different questionnaire and predicts depression levels using machine learning models. Enables early detection of depression through an accessible and data-driven assessment, encouraging timely intervention and support.",
      img: "/project/wmw.png",
      url: "https://github.com/Saurabhkumr/Well-Mind-Wave",
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="projects" className="scroll-mt-25">
      <motion.h2
        className="flex justify-center mt-30 mb-10 text-3xl text-orange-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="max-w-11/12 mx-auto flex justify-center flex-wrap gap-6">
        {project.map((i, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card sx={{ maxWidth: 345, height: 450 }}>
              <CardMedia component="img" height="140" image={i.img} alt="img" />
              <CardContent>
                <div
                  className="text-2xl mb-2 hover:text-orange-400 cursor-pointer"
                  onClick={() => handleClick(i.url)}
                >
                  {i.title} <GitHub />
                </div>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {i.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
