import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="h-[70px] bg-orange-400 text-black flex justify-around items-center px-6">
      <div className="italic">@ 2025 Saurabh Kumar</div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Saurabhkumr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="hover:text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/saurabh-kumar-a51981287/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="hover:text-white" />
        </a>

        <a
          href="https://x.com/saurabhkr_027"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon className="hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
