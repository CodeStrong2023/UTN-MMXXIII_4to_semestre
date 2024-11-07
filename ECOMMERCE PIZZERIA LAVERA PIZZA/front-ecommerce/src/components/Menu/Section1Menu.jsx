import React from "react";
import fondo from "../../assets/images/pizzeria_76.jpg";
import { Link } from "react-scroll";

export const Section1Menu = () => {
  return (
    <div className="w-screen max-w-none h-full sm:h-screen text-white flex flex-col items-center justify-center relative">
      <img src={fondo} alt="" className="absolute w-screen h-full sm:h-screen -z-10 object-cover" />
      <div className="h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center">
        <div className="h-[calc(100vh-290px)] w-full sm:w-3/4 md:w-2/4 flex items-center justify-center italic font-thin text-6xl sm:text-7xl md:text-8xl transform rotate-[-14deg]">
          MENU
        </div>
        <div className="h-[calc(100vh-370px)] w-3/4 sm:w-4/5 md:w-4/5 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <Link to="section2" smooth={true} duration={500} className="h-24 sm:h-20 md:h-20 w-full sm:w-1/4 md:w-2/3 bg-white text-black hover:bg-gray-400 font-semibold flex items-center justify-center text-sm sm:text-sm md:text-sm">
            PROMOS
          </Link>
          <Link to="section3" smooth={true} duration={500} className="h-24 sm:h-20 md:h-20 w-full sm:w-1/4 md:w-2/3 bg-yellow-600 text-black hover:bg-yellow-500 font-semibold flex items-center justify-center text-sm sm:text-sm md:text-sm">
            PIZZAS
          </Link>
          <Link to="section5" smooth={true} duration={500} className="h-24 sm:h-20 md:h-20 w-full sm:w-1/4 md:w-2/3 bg-orange-600 text-black hover:bg-orange-500 font-semibold flex items-center justify-center text-sm sm:text-sm md:text-sm">
            MENU DIGITAL
          </Link>
          <Link to="section4" smooth={true} duration={500} className="h-24 sm:h-20 md:h-20 w-full sm:w-1/4 md:w-2/3 bg-gray-800 text-white hover:bg-gray-700 font-semibold flex items-center justify-center text-sm sm:text-sm md:text-sm">
            RESERVAS
          </Link>
        </div>
      </div>
    </div>
  );
};