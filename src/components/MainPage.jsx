import React from "react";
import Header from "./Header";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
        alt="main-image"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Header */}
      <div className=" w-11/12 relative z-20 flex justify-between items-center">
        <Header />
        <div className="flex gap-6 ">
          <div className="flex gap-1.5  px-3 py-2 border cursor-pointer bg-black rounded-sm text-white">
            <IoLanguage size={20} color="white" />
            <select className="cursor-pointer bg-black   ">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          <button className="bg-red-500 px-4 py-2 cursor-pointer text-white rounded-md hover:bg-red-700">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>

      <div className="max-w-[45%] text-center mx-auto flex relative top-30 flex-col  items-center text-white">
        <h1 className="text-6xl font-bold">
          Unlimited movies, shows, and more
        </h1>
        <p className="relative top-3.5 text-xl font-bold">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className=" relative top-8 text-xl font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="relative top-15 flex gap-2">
          <input
            type="email"
            placeholder="email address"
            className="p-2 w-70 h-15 bg-transparent border rounded-sm text-[1rem]"
          />
          <button className="bg-red-500 px-4 py-2 text-left cursor-pointer text-white rounded-md hover:bg-red-700 w-50 font-bold text-[1.5rem]">
            Get Started {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
