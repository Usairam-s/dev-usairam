import Image from "next/image";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen  bg-black overflow-hidden">
      <div className=" relative">
        <div className="max-w-5xl mx-auto p-5 ">
          <Navbar />
          <Herosection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-5xl mx-auto p-5 mt-14 ">
        <Skills />
        <Projects />

        <h1 className="bg-gradient-to-r from-emerald-500 to-emerald-600  text-transparent my-14 text-5xl bg-clip-text  text-center items-center flex justify-center  tracking-wide animate-pulse">
          More Project Comming soon
        </h1>
      </div>
    </div>
  );
}
