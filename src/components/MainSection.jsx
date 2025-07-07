import React from "react";
import image1 from "../assets/Images/mars1931macOS.avif";
import image2 from "../assets/Images/main2.avif";
import image3 from "../assets/Images/visionPro.avif";
import image4 from "../assets/Images/main4.avif";
import image5 from "../assets/Images/6c20e9_e75d49e44aef40fca811cc2577700445~mv2.avif";
import image6 from "../assets/Images/6c20e9_828bcc3f26034eddb0b6077057d86650~mv2.avif";
import { MdMail } from "react-icons/md";

export default function MainSection() {
  return (
    <section className="flex flex-col justify-center bg-[rgba(22, 22, 23, 0.88)] text-center py-16 px-6 mt-20">
      <h1 className="text-[80px] font-bold text-black mb-6 leading-[80px]">
        The best app & game <br /> development studio.
      </h1>
      <p className="text-black text-[30px] mx-auto mb-6">
        Save hours of development time
      </p>
      <div className="justify-center items-center flex">
        <button className="flex items-center gap-3 bg-black text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border hover:border-dashed hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition ease-in-out">
          Make an enquiry <MdMail />
        </button>
      </div>

     
      <div className="flex flex-row gap-8 mt-26 overflow-hidden ml-[-50px]">
        <img src={image6} alt="Logo" className="w-auto h-[250px]" />
        <img src={image1} alt="Logo" className="w-auto h-[240px]" />
        <img src={image2} alt="Logo" className="w-auto h-[250px]" />
        <img src={image3} alt="Logo" className="w-auto h-[240px]" />
        <img src={image4} alt="Logo" className="w-auto h-[250px]" />
        <img src={image5} alt="Logo" className="w-auto h-[250px]" />
      </div>
    </section>
  );
}
