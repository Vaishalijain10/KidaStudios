import React from "react";
import { MdEmail } from "react-icons/md";

const ServiceCard = ({ title, image, description, icon }) => {
  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md relative overflow-hidden flex flex-col items-start">
      <div className="rounded-xl overflow-hidden mb-4 w-full">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>

      <p className="text-sm font-semibold text-black mb-8 leading-tight text-left">
        {description}
      </p>

      <button className="flex items-center gap-2 border-2 border-[#ee5440] text-[#ee5440] text-sm font-bold px-4 py-2 rounded-full hover:border-dashed hover:text-red-500 transition">
        make an enquiry <MdEmail className="text-lg" />
      </button>

      <img
        src={icon}
        alt="icon"
        className="absolute w-20 bottom-3 right-4 opacity-80"
      />
    </div>
  );
};

export default ServiceCard;
