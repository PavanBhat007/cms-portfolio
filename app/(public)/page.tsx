import React from "react";
import Navbar from "../../components/Navbar";
import { ArrowRight, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";

export const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Portfolio;
