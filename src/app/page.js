"use client";
import { useState, useEffect } from "react";
import Contact from "@/components/Contact";
import LandingPage from "@/components/LandingPage";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Animation from "@/components/Animation";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  });
  return (
    <>
      {isVisible ? (
        <Animation />
      ) : (
        <>
          <LandingPage />
          <Experience />
          <Project />
          <Skill />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
