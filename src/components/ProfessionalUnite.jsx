import React from "react";
import mishti from "../assets/Images/Indie 2.avif";
import laadu from "../assets/Images/24410e2ce20a499cba1bc24e91bad43b.avif";
import simba from "../assets/Images/file7df7iiodfsi1if4jhd70-923224-1607200201.avif";

const dogTeam = [
  {
    id: 1,
    name: "Mishti",
    role: "Chief Sniffing Officer",
    description: "Sniffing out great ideas and new opportunities for the pack!",
    image: mishti,
  },
  {
    id: 2,
    name: "Laadu",
    role: "Playtime Productivity Officer",
    description: "Boosting morale and productivity with every play break!",
    image: laadu,
  },
  {
    id: 3,
    name: "Simba",
    role: "Tail-wagging Talent Scout",
    description: "Sniffing out the best talent, one belly rub at a time!",
    image: simba,
  },
];

export default function ProfessionalUnite() {
  return (
    <section className="py-16 px-6 bg-white text-center mt-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
        Paws & Professionals unite
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-12">
        Meet our paw-fessional {"\u{1F43E}"} team and lucky mascots!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dogTeam.map((dog) => (
          <div key={dog.id} className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-2xl overflow-hidden mb-4 shadow-md">
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-black">{dog.name}</h3>
            <h4 className="text-md font-semibold text-black mt-1">
              {dog.role}
            </h4>
            <p className="  text-sm text-black mt-1 max-w-[250px]">
              {dog.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
