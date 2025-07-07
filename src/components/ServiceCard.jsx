import React from "react";
import { MdEmail } from "react-icons/md";

const ServiceCard = ({ title, image, description, icon }) => {
  return (
    <div className="max-w-md bg-white p-6 rounded-2xl shadow-md relative overflow-hidden">
      <div className="rounded-xl overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-[14px] font-semibold text-black mb-8 text-left leading-[18px] justify-items-center w-[320px]">
          {description}
        </p>
      </div>

      <button className="flex items-center gap-2 border-2 border-[#ee5440] text-[#ee5440] text-sm font-bold px-4 py-2 rounded-full hover:border-2 hover:border-dashed hover:text-red-500 transition">
        make an enquiry
        <MdEmail className="text-lg" />
      </button>

      <img
        src={icon}
        alt=" icon"
        className="absolute w-24 bottom-2 right-5 text-red-500"
      />
    </div>
  );
};

export default ServiceCard;
