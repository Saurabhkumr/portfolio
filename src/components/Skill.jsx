import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  const skillData = [
    {
      lang: "Java",
      logo: "assets/java.svg",
    },
    {
      lang: "Javascript",
      logo: "assets/js.svg",
    },
    {
      lang: "python",
      logo: "assets/python.svg",
    },
    {
      lang: "React",
      logo: "assets/react.svg",
    },
    {
      lang: "Next.js",
      logo: "assets/nextjs.svg",
    },
    {
      lang: "Node.js",
      logo: "assets/nodejs.svg",
    },
    {
      lang: "MongoDB",
      logo: "assets/mongodb.svg",
    },
    {
      lang: "MySql",
      logo: "assets/mysql.svg",
    },
    {
      lang: "Docker",
      logo: "assets/docker.svg",
    },
  ];

  return (
    <>
      <div id="skills" className="scroll-mt-25">
        <h2 className="flex justify-center mt-30 text-3xl text-orange-400">Technical Skills</h2>

        <div className="max-w-4xl mx-auto mt-10 mb-10 flex justify-center gap-4 flex-wrap">
          {skillData.map((i, index) => (
            <SkillCard key={index} lang={i?.lang} logo={i?.logo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
