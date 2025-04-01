"use client";
import React from "react";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 max-w-3xl flex flex-col justify-center mx-auto text-center h-screen gap-4">
        <div className="flex justify-center">
          <img
            src="/assets/me4.png"
            alt=""
            className="rounded-full w-60 h-60 object-cover object-top"
          />
        </div>
        <h1>
          Hi, I am <span className="text-orange-400">Saurabh Kumar</span>
        </h1>
        <p className="mt-2 max-w-2xl mx-auto">
          I am a dedicated software developer with a passion for building robust
          and scalable applications. With a strong foundation in full-stack
          development, I thrive on transforming ideas into reality through clean
          and efficient code.
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
