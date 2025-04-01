import React from "react";
import Image from "next/image";
const SkillCard = ({ lang, logo }) => {
  return (
      <div className="flex justify-start items-center gap-5 w-2xs ring-2 ring-inset ring-zinc-50/10 rounded-2xl px-8 py-2 hover:bg-zinc-800 transition-colors ">
        <div>
          <Image src={logo} alt="java" width={40} height={40} />
        </div>
        <div>
          <p className="text-2xl">{lang}</p>
        </div>
      </div>
  );
};

export default SkillCard;
