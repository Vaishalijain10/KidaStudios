import React from "react";
import { techStack } from "../constants/techStack";

export default function CaseStudy() {
  return (
    <div className="mt-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <div className="p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 rounded-[30px] bg-gradient-to-r from-[#0c6451] via-[#3a6b45] to-[#ffa726] text-white shadow-lg text-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase">Case Study</p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Know how KIDA Studios helped KamayaKya Wealth <br className="hidden sm:block" />
            Management build & maintain their product
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
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
            Know more
          </a>
        </div>
      </div>
    </div>
  );
}
