"use client";

import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skill = () => {
  const skillData = [
    { lang: "Java", logo: "assets/java.svg" },
    { lang: "Javascript", logo: "assets/js.svg" },
    { lang: "Python", logo: "assets/python.svg" },
    { lang: "React", logo: "assets/react.svg" },
    { lang: "Next.js", logo: "assets/nextjs.svg" },
    { lang: "Node.js", logo: "assets/nodejs.svg" },
    { lang: "MongoDB", logo: "assets/mongodb.svg" },
    { lang: "MySql", logo: "assets/mysql.svg" },
    { lang: "Docker", logo: "assets/docker.svg" },
  ];

  return (
    <div id="skills" className="scroll-mt-25">
      <motion.h2
        className="flex justify-center mt-30 text-3xl text-orange-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-10 mb-10 flex justify-center gap-4 flex-wrap">
        {skillData.map((i, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCard lang={i.lang} logo={i.logo} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
