import React from "react";
import fondo from "../../assets/images/pizzeria_76.jpg";

export const Section1Menu = () => {
  return (
    <div className="w-screen max-w-none h-full  text-white items-center justify-center  ">
      <img
        src={fondo} alt="" className="absolute  w-screen max-w-none h-full -z-10"/>
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <div className="h-[calc(100vh-290px)] w-2/4 flex items-center justify-center italic font-thin text-8xl transform rotate-[-14deg]">
          MENU
        </div>
        <div className="h-[calc(100vh-370px)] w-2/3 flex items-center ">
          <button className="h-28 w-1/4 bg-white text-black  hover:bg-gray-400 font-semibold flex items-center justify-center">
            PROMOS
          </button>
          <button className="h-28 w-1/4 bg-yellow-600 text-black  hover:bg-yellow-500 font-semibold flex items-center justify-center">
            PIZZAS
          </button>
          <button className="h-28 w-1/4 bg-orange-600 text-black  hover:bg-orange-500 font-semibold flex items-center justify-center">
            SANGUCHES
          </button>
          <button className="h-28 w-1/4 bg-gray-800 text-white  hover:bg-gray-700 font-semibold flex items-center justify-center">
            BEBIDAS
          </button>
        </div>
      </div>
    </div>
  );
};
