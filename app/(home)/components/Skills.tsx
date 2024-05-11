"use client";
import Title from "./Title";
import { HoverEffect } from "@/components/HoverEffect";
import {
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "Javscript",
      Icon: SiJavascript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },

    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Mongo DB",
      Icon: SiMongodb,
    },
    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      {" "}
      <Title
        text={"Skills 🔪"}
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
