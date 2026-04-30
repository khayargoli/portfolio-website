import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import work from "@/public/4.png";
import keybalance from "@/public/3.png";
import baako from "@/public/5.png";
import bluesky from "@/public/blueskyy.png";
import barabar from "@/public/7.png";
import bored from "@/public/bored2.jpg";
import fizno from "@/public/fizno.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "London Metropolitan University Graduate",
    location: "BSC.IT (Computing)",
    description:
      "I undergraduated and immediately got a job as a junior software engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Junior Software Engineer",
    location: "IT@Himalaya (PROCIT)",
    description:
      "I worked as a junior mobile developer for 4 years, led a team of 4 developers to plan and build custom web apps for industrial clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: "London Metropolitan University Graduate",
    location: "MSC.IT (Data Analytics)",
    description: "I freelanced throughout my studies, and later advanced my expertise with data science and analytics.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Freelance Software Engineer",
    location: "Upwork",
    description:
      "I'm now a full time freelance software engineer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fizno",
    description: "Worked as a Full Stack Developer on the Fizno Marketplace. Designed and implemented a complete checkout system, ensuring smooth and reliable transactions. Focused on optimizing performance, debugging production issues, and maintaining a stable backend system.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MySQL", "AWS"],
    imageUrl: fizno,
    link: "https://fizno.com",
  },
  {
    title: "WÖRK",
    description:
      "I worked as a front-end web and mobile developer on this startup project for 2 years. With WÖRK job seekers can find jobs through video based insights brought by companies. WÖRK is available to download on both AppStore and PlayStore.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Flutter"],
    imageUrl: work,
    link: "https://woerk.app",
  },
  {
    title: "KeyBalance",
    description:
      "A complete cloud based ERP system. I was the front-end web and mobile app developer. Built with cross-platform technology that runs on android, iOS and browsers.",
    tags: ["Angular", "TypeScript", "PrimeNg", "Ionic Capacitor"],
    imageUrl: keybalance,
    link: "https://keybalance.com",
  },
  {
    title: "ChillWhales",
    description:
      "I worked as a front-end developer and assited in transforming figma design into snappy UI for chillwhales.com which is a digital collection of unique NFTs on the LUKSO blockchain.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: baako,
    link: "https://chillwhales.com",
  },
  {
    title: "Barabar",
    description:
      "Hobby project to explore OCR technology. Barabar is an OCR-powered bill splitting app that lets you snap a receipt, auto-detect items, assign them to people, and instantly generate shareable individual bills.",
    tags: ["Android", "Java", "OCR"],
    imageUrl: barabar,
    link: "https://play.google.com/store/apps/details?id=com.splitbill.barabar&hl=en",
  },
  {
    title: "BlueSky Software",
    description:
      "Blue Sky is a Connect Security Solutions product. Founded in 2004, the company has ensured safety of security staff for 18 years. I was a solo developer and completed several apps of the company.",
    tags: ["Android", "Java", "BLE Beacon"],
    imageUrl: bluesky,
    link: "https://blueskytrail.co.uk/",
  },
  {
    title: "Bored",
    description: "Bored is a fun and engaging app born from my love for Amazfit smartwatches. It helps users beat boredom by offering a variety of productive activities right on their wrist.",
    tags: ["ZeppOS", "Amazfit", "Smartwatch"],
    imageUrl: bored,
    link: "https://developer.zepp.com/apps/bored"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node/Express",
  "Stripe",
  "AWS",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "Postgres",
  "ZuStand",
  "Express",
  "Framer Motion",
  "Dart",
  "Flutter",
  "Cursor",
  "Ionic Framework",
  "Capacitor/Cordova"
] as const;
