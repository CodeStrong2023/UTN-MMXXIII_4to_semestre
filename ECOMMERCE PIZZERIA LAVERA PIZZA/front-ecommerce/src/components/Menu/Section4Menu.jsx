import fondo from "../../assets/images/pizzeria_77.jpg";

export const Section4Menu = () => {
  return (
    <div className="w-screen max-w-none h-full  text-white items-center justify-center  ">
      <div className="absolute  w-screen max-w-none h-full bg-black -z-10 opacity-70"></div>
      <img
        src={fondo} alt="" className="absolute  w-screen max-w-none h-full -z-20"/>
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <span className="font-thin text-7xl h-40">RESERVA TU MESA</span>
        <p className="font-bold text-3xl text-yellow-400 h-16">(260)-4811711</p>
        <button className="h-11 w-1/4 bg-white text-black  hover:bg-gray-300 font-semibold flex items-center justify-center m-3">
            Pedí ahora
        </button>
        <button className="h-11 w-1/4 bg-yellow-600 text-white  hover:bg-yellow-500 font-semibold flex items-center justify-center m-3">
            Escribinos
        </button>
      </div>
    </div>
  );
};