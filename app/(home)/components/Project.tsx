import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

function Project({ project }: { project: any }) {
  return (
    <div className="mt-24">
      <Card className="bg-gradient-to-r from-slate-400 to-gray-400 border hover:drop-shadow-2xl text-black">
        <CardHeader>
          <CardTitle>
            <Image
              src={project.cover}
              alt="project_image"
              width={400}
              height={400}
              className="object-cover w-full border border-gray-400 rounded-lg"
            />
          </CardTitle>
          <CardDescription className="text-2xl font-bold text-black mt-2">
            {project.title}
          </CardDescription>
          <a
            className="bg-white w-fit flex items-center gap-2 px-4 py-1 rounded-lg"
            href={project.link}
            target="_blank"
          >
            <span className="font-bold">See live app</span>
            <span className="animate-pulse text-xs ">🟢</span>
          </a>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold underline">Tech Stack</p>
          <div className="flex flex-wrap gap-2 items-center mt-2">
            {project.tech.map((Icon: any, index: number) => (
              <div
                key={index}
                className="flex w-fit justify-center items-center"
              >
                <div className="flex flex-col items-center">
                  <Icon size={16} className="mr-2" />{" "}
                  {/* Decrease the size of the icons */}
                  <span>{project.techNames[index]}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            className="w-full text-xl font-medium mx-auto flex justify-center underline flex-row  text-center items-center"
          >
            {" "}
            Github Repo
            <MdArrowOutward size={20} />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Project;
