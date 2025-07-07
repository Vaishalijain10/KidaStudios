import React from "react";
import { techStack } from "../constants/techStack";

export default function CaseStudy() {

  return (
    <div className=" mt-20 mx-[200px] p-12 rounded-[40px] bg-gradient-to-r from-[#0c6451] via-[#3a6b45] to-[#ffa726] text-white shadow-lg">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase">Case Study</p>
        <h2 className="text-2xl font-semibold leading-snug">
          Know how KIDA Studios helped KamayaKya Wealth <br />
          Management build & maintain their product
        </h2>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-full"
            >
              <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="text-white underline font-medium inline-block mt-4"
        >
          know more
        </a>
      </div>
    </div>
  );
}
