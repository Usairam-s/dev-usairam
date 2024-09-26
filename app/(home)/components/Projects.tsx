"use client";
import {
  SiAuth0,
  SiClerk,
  SiFirebase,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRecoil,
  SiShadcnui,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";

import Project from "./Project";
import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false); // Manage whether all projects are shown

  const projects = [
    {
      title: "Multi Teanant Blog SAAS",
      tech: [SiNextdotjs, SiPrisma, SiPostgresql, SiStripe],
      techNames: ["Next.js", "Prisma ORM", "Postgresql", "Stripe Payment"],
      link: "https://saasblog-phi.vercel.app",
      cover: "/6.png",
      github: "https://github.com/Usairam-s/saasblog",
      background: "bg-green-500",
    },
    {
      title: "Cool Note SAAS",
      tech: [SiNextdotjs, SiPrisma, SiPostgresql, SiStripe],
      techNames: ["Next.js", "Prisma ORM", "Postgresql", "Stripe Payment"],
      link: "https://saasnote.vercel.app",
      cover: "/7.png",
      github: "https://github.com/Usairam-s/notesaas",
      background: "bg-green-500",
    },
    {
      title: "Personal File Storage ",
      tech: [SiNextdotjs, SiTailwindcss, SiFirebase, SiClerk, SiShadcnui],
      techNames: ["Next.js", "Tailwind ", "Firebase", "Clerk", "Shadcn"],
      link: "https://filerush.vercel.app",
      cover: "/filerush.png",
      github: "https://github.com/Usairam-s/filerush",
      background: "bg-green-500",
    },
    {
      title: "Pizza  Order App",
      tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiStripe],
      techNames: ["Next.js", "Tailwind ", "MongoDB", "Stripe"],
      link: "https://dawid-food-ordering-app.vercel.app",
      cover: "/9.png",
      github: "https://github.com/Usairam-s",
      background: "bg-green-500",
    },
    // {
    //   title: "Zeal Business Webiste Design",
    //   tech: [SiNextdotjs, SiTailwindcss, SiMui],
    //   techNames: ["Next.js", "Tailwind ", "Material UI"],
    //   link: "https://zealclone.vercel.app",
    //   cover: "/5.png",
    //   github: "https://github.com/Usairam-s/zealclone",
    //   background: "bg-green-500",
    // },
    {
      title: "Minimal X(Twitter) Plateform",
      tech: [SiNextdotjs, SiTailwindcss, SiFirebase, SiAuth0, SiRecoil],
      techNames: ["Next.js", "Tailwind", "Firebase", "NextAuth", "Recoil"],
      link: "https://xnextjs.vercel.app",
      cover: "/x.png",
      github: "https://github.com/Usairam-s/xnextjs",
      background: "bg-indigo-500",
    },
    {
      title: "Home Rent and Booking system",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiSupabase,
        SiPrisma,
        SiAuth0,
        SiShadcnui,
      ],
      techNames: [
        "Next.js",
        "Tailwind ",
        "Supbase",
        "Prisma",
        "KindeAuth",
        "Shadcn",
      ],
      link: "https://globalguest.vercel.app",
      cover: "/global.png",
      github: "https://github.com/Usairam-s/globalguest",
      background: "bg-green-500",
    },
  ];

  // Determine how many projects to display
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text={"Project 🎨"}
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Show More/Less Button */}
      <div className="flex justify-center mt-8">
        <button
          className="border shadow-2xl text-green-500 px-4 py-2 rounded-lg"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default Projects;

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="w-full sm:w-auto">
      <Project project={project} />
    </div>
  );
}
