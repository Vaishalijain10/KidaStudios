import React from "react";
import contact from "../assets/Images/contact.svg";

export default function ContactUs() {
  return (
    <div className="relative w-full">
      <img src={contact} alt="contact background" className="w-full" />

      <div className="bg-[#035946] w-full h-[350px] flex flex-col md:flex-row justify-between items-center px-87 py-12 text-white gap-6">
        <div className="text-left">
          <h1 className="text-6xl font-bold leading-tight">Join our</h1>
          <h1 className="text-6xl font-bold leading-tight">newsletter</h1>
        </div>

        <div className="flex flex-col gap-3 md:items-start">
          <h3 className="text-lg font-medium">
            Keep up with the latest news, releases, and more:
          </h3>
          <div className="flex">
            <input
              required
              type="email"
              placeholder="Enter your email here*"
              className="px-6 py-3 rounded-l-full text-black w-[300px] outline-none bg-white border-transparent hover:border-t-2 hover:border-l-2 hover:border-b-2 hover:border-[#767676]"
            />
            <button className="px-6 py-3 bg-[#F21971] text-white font-bold rounded-r-full hover:bg-[#2997dd] transition-all ease-in-out">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
