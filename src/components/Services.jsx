import React from "react";
import ServiceCard from "./ServiceCard";
import { Service } from "../constants/Services";

export default function Services() {
  return (
    <section id="OurServices" className="bg-[#f5f5f5] py-16 mt-24 scroll-mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
          Our services
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-black max-w-3xl mx-auto mb-12">
          We pride ourselves in adopting, iterating & investing in the latest
          technologies, seamless processes and creative talent that can help
          architect & scale our client's vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {Service.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
