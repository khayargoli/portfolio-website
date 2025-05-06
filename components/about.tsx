"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 font-light">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "} */}
        As a freelance software developer, I specialize in building <span className="font-medium">web and mobile applications. </span>
        I love working with modern frameworks and technologies to build fast, responsive, and engaging web and mobile apps.
        Whether it's creating pixel-perfect UIs, optimizing performance, or solving tricky challenges, I'm always up for it!

        My <span className="">favorite</span> part of programming is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>

      <p>My core stack
        is{" "}
{/*         <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span> */}
         <span className="font-medium">
          Angular/React, TypeScript, Node.js, and MongoDB.
        </span>
      </p>

      <p className="font-light">
        <span className="italic">When I'm not coding</span>, you'll probably find me  <span className="font-medium">exploring new tech trends, experimenting with side projects,</span> or enjoying a good cup of coffee.
        {" "}Let's build something <span className="font-medium">amazing together!</span>🚀
      </p>
    </motion.section>
  );
}
