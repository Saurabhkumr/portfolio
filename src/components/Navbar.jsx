"use client";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";


const Navbar = () => {
  const handleDownload=()=>{
    const resumeURL = "/saurabh_resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Saurabh_Kumar_Resume.pdf"; 
    link.click();
  }
  return (
    <div className="max-w mt-2 flex items-center justify-around mx-auto p-4 h-15">
      <div className="ml-15 text-orange-400 italic">Saurabh Kumar</div>
      <ul className="md:flex hidden items-center">
        <li className="mx-10 cursor-pointer hover:text-orange-400">Home</li>
        <li className="mx-10 cursor-pointer hover:text-orange-400">Projects</li>
        <li className="mx-10 cursor-pointer hover:text-orange-400">Skills</li>
        <li className="mx-10 cursor-pointer hover:text-orange-400">Contact</li>
        <li className="mx-10 cursor-pointer hover:text-orange-400 border-2 px-4 py-1 rounded-2xl" onClick={handleDownload}>
          Resume <DownloadIcon />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
