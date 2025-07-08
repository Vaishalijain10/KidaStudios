import React from "react";
import contact from "../assets/Images/contact.svg";

export default function ContactUs() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img src={contact} alt="contact background" className="w-full" />

      {/* Newsletter Banner */}
      <div className="bg-[#035946] w-full min-h-[350px] flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-20 py-12 text-white gap-8 md:gap-6">
        
        {/* Left: Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Join our newsletter
          </h1>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
          <h3 className="text-base sm:text-lg font-medium text-center md:text-left">
            Keep up with the latest news, releases, and more:
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              required
              type="email"
              placeholder="Enter your email here*"
              className="px-4 sm:px-6 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none text-black w-[260px] sm:w-[300px] outline-none bg-white border-2 border-transparent hover:border-[#767676] transition"
            />
            <button className="mt-2 sm:mt-0 sm:ml-0 px-6 py-3 bg-[#F21971] text-white font-bold rounded-full sm:rounded-r-full sm:rounded-l-none hover:bg-[#2997dd] transition-all ease-in-out">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
