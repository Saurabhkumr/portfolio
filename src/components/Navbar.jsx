"use client";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";

const Navbar = () => {
  const handleDownload = () => {
    const resumeURL = "/saurabh_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Saurabh_Kumar_Resume.pdf";
    link.click();
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0a0a0a] z-1">
      <div className="max-w mt-2 flex items-center justify-around mx-auto p-4 h-15">
        <Image src="/assets/logo.svg" width={120} height={80} alt="logo" />
        <ul className="md:flex hidden items-center">
          <li
            className="mx-10 cursor-pointer hover:text-orange-400"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className="mx-10 cursor-pointer hover:text-orange-400"
            onClick={() => handleScroll("experience")}
          >
            Experience
          </li>
          <li
            className="mx-10 cursor-pointer hover:text-orange-400"
            onClick={() => handleScroll("projects")}
          >
            Projects
          </li>
          <li
            className="mx-10 cursor-pointer hover:text-orange-400"
            onClick={() => handleScroll("skills")}
          >
            Skills
          </li>
          <li
            className="mx-10 cursor-pointer hover:text-orange-400"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
          {/* <li
            className="mx-10 cursor-pointer hover:text-orange-400 border-2 px-4 py-1 rounded-2xl"
            onClick={handleDownload}
          >
            Resume <DownloadIcon />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
