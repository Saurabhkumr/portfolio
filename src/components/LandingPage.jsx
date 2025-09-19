"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiLeetcode } from "react-icons/si";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ParticleComponent from "./ParticleComponent";

const LandingPage = () => {
  const isPhone = useMediaQuery("(max-width:600px)");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div id="home" className="relative overflow-hidden">
      <ParticleComponent />
      <Navbar />
      <div className="w-11/12 max-w-3xl m-5 flex flex-col justify-center mx-auto text-center h-screen gap-4 italic z-10 relative">
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
            onClick={() => setIsModalOpen(true)}
          >
            My Resume
          </div>
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Creative and driven software developer dedicated to crafting
          real-world tech solutions. I believe in writing maintainable code and
          constantly pushing my boundaries to learn and innovate. Seeking an
          opportunity to contribute meaningfully to a team where I can grow and
          make a real impact.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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
            href="https://leetcode.com/u/saurabhkr0927/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: isPhone ? "#fb923c" : "inherit",
              "&:hover": {
                color: "#fb923c",
              },
            }}
          >
            <SiLeetcode size={24} />
          </IconButton>
        </motion.div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-orange-400 rounded-xl overflow-hidden shadow-xl w-[90%] max-w-3xl h-[80%] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="italic text-black font-semibold">My Resume</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm text-black hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="h-[calc(100%-56px)]">
                <iframe
                  src="/saurabh_resume.pdf"
                  className="w-full h-full"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
