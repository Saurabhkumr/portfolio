"use client";

import React from "react";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const LandingPage = () => {
  const isPhone = useMediaQuery("(max-width:600px)");

  const handleDownload = () => {
    const resumeURL = "/saurabh_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Saurabh_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <div id="home">
      <Navbar />
      <div className="w-11/12 max-w-3xl m-5 flex flex-col justify-center mx-auto text-center h-screen gap-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/me.png"
            alt="profile"
            className="rounded-full w-60 h-60 object-cover object-top"
          />
        </motion.div>

        <motion.h1
          className="text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I am <span className="text-orange-400">Saurabh Kumar</span>
        </motion.h1>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="mx-10 cursor-pointer hover:text-orange-400 border-2 px-4 py-1 rounded-2xl"
            onClick={handleDownload}
          >
            Resume <DownloadIcon />
          </div>
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I'm a dedicated software developer with a passion for building
          efficient and user-friendly applications. I love tackling complex
          challenges and constantly exploring new ways to enhance my skills. I
          believe in writing clean, maintainable code and enjoy working in
          collaborative environments. My goal is to create impactful solutions
          that make a difference.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <IconButton
            component="a"
            href="https://github.com/Saurabhkumr/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: isPhone ? "#fb923c" : "inherit",
              "&:hover": {
                color: "#fb923c",
              },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/saurabh-kumar-a51981287/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: isPhone ? "#fb923c" : "inherit",
              "&:hover": {
                color: "#fb923c",
              },
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href="https://x.com/saurabhkr_027"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: isPhone ? "#fb923c" : "inherit",
              "&:hover": {
                color: "#fb923c",
              },
            }}
          >
            <XIcon fontSize="medium" />
          </IconButton>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
