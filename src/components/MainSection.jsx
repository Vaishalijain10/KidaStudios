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
   <section className="flex flex-col items-center justify-center bg-white text-center py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 mt-16 sm:mt-20 w-full">
  <div className="w-full max-w-7xl flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-center text-[38px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px] font-bold text-black mb-4 sm:mb-6 leading-tight">
      The best app & game <br className="hidden sm:block" />
      development studio.
    </h1>

    <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-black mb-6 sm:mb-8 max-w-3xl">
      Save hours of development time
    </p>

    <div className="mb-12 sm:mb-16">
      <button className="flex items-center gap-2 sm:gap-3 bg-black text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black hover:border hover:border-dashed hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition ease-in-out">
        Make an enquiry <MdMail size={20} />
      </button>
    </div>
  </div>

  {/* Image row */}
  <div className="w-full overflow-x-auto scroll-smooth scrollbar-hide scrollbar-hidden">
    <div className="flex justify-center gap-8 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 pl-10 min-w-max ">
      {[image6, image1, image2, image3, image4, image5].map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Image ${idx}`}
          className="h-[160px] sm:h-[140px] md:h-[180px] lg:h-[220px] xl:h-[240px] w-auto object-contain"
        />
      ))}
    </div>
  </div>
</section>

  );
}
