import React from "react";

function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h1 className="hover:text-green-500 text-xl font-bold">{text}</h1>
      <div className="w-40 h-2 bg-green-500 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-500 translate-x-2 rounded-full"></div>
    </div>
  );
}

export default Title;
