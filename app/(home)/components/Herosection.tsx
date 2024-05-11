import Link from "next/link";
import myImage from "/bg.jpeg";
import { MovingBorder, MovingBorderBtn } from "@/components/MovingBorderBtn";
import Title from "./Title";

function Herosection() {
  return (
    <div
      style={{
        backgroundImage: `url('/bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[70vh]  bg-cover bg-center flex-col-reverse lg:gap-0 gap-14 lg:flex-row flex items-center justify-between"
    >
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Nice to meet you! 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Usairam."}
          </span>{" "}
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Pakistan, I'm a Fullstack developer passionate about building modern web applications that users love."
          }
        </p>
        <Link className="inline-block" href={"mailto:muhammaduseram@gmail.com"}>
          <Title text={"Contact Me 📨"} />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex space-x-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex space-x-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500 "></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] -z-10 right-1/2"></div>
        </div>

        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-2 font-semibold">
            <p>
              {" "}
              <span className=" mr-1">⚡️</span> Available for work
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
