"use client";
import React from "react";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";

const LandingPage = () => {
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
      <div
        className="w-11/12 max-w-3xl flex flex-col justify-center mx-auto text-center 
       h-screen gap-4"
      >
        <div className="flex justify-center">
          <img
            src="/assets/me.png"
            alt=""
            className="rounded-full w-60 h-60 object-cover object-top"
          />
        </div>
        <h1>
          Hi, I am <span className="text-orange-400">Saurabh Kumar</span>
        </h1>
        <div className="flex justify-center md:hidden">
          <div
            className="mx-10 cursor-pointer hover:text-orange-400 border-2 px-4 py-1 rounded-2xl"
            onClick={handleDownload}
          >
            Resume <DownloadIcon />
          </div>
        </div>
        <p className="max-w-2xl mx-auto">
          I'm a dedicated software developer with a passion for building
          efficient and user-friendly applications. I love tackling complex
          challenges and constantly exploring new ways to enhance my skills. I
          believe in writing clean, maintainable code and enjoy working in
          collaborative environments. My goal is to create impactful solutions
          that make a difference.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 justify-center">
          <IconButton
            component="a"
            href="https://github.com/Saurabhkumr/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "inherit",
              "&:hover": {
                color: "#f97316",
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
              color: "inherit",
              "&:hover": {
                color: "#f97316",
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
              color: "inherit",
              "&:hover": {
                color: "#f97316",
              },
            }}
          >
            <XIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
