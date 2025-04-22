"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bg-[#0a0a0a] z-50"
    >
      <div className="max-w mt-2 flex items-center justify-around mx-auto p-4 h-15 italic">
        <Image src="/assets/logo.svg" width={120} height={80} alt="logo" className="cursor-pointer" onClick={()=>handleScroll("home")}/>

        <ul className="md:flex hidden items-center">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              className="mx-10 cursor-pointer hover:text-orange-400"
              onClick={() => handleScroll(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
