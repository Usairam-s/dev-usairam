import {
  SiAuth0,
  SiClerk,
  SiFirebase,
  SiMui,
  SiNextdotjs,
  SiPrisma,
  SiRecoil,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "Zeal Business Webiste Design",
      tech: [SiNextdotjs, SiTailwindcss, SiMui],
      techNames: ["Next.js", "Tailwind ", "Material UI"],
      link: "https://zealclone.vercel.app",
      cover: "/5.png",
      github: "https://github.com/Usairam-s/zealclone",
      background: "bg-green-500",
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
      title: "Minimal X(Twitter) Plateform",
      tech: [SiNextdotjs, SiTailwindcss, SiFirebase, SiAuth0, SiRecoil],
      techNames: ["Next.js", "Tailwind", "Firebase", "NextAuth", "Recoil"],
      link: "https://xnextjs.vercel.app",
      cover: "/x.png",
      github: "https://github.com/Usairam-s/xnextjs",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text={"Project 🎨"}
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
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
