import fondo from "../../assets/images/pizzeria_77.jpg";
import { Link } from "react-router-dom";

export const Section4Menu = () => {
  return (
    <div id="section4" className="w-screen h-screen text-white relative">
      <div className="absolute w-full h-full bg-black -z-10 opacity-70"></div>
      <img
        src={fondo}
        alt=""
        className="absolute w-full h-full -z-20 object-cover"
      />
      <div className="flex flex-col items-center justify-center h-full">
        <span className="font-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-32 md:h-40 text-center">
          RESERVA TU MESA
        </span>
        <p className="font-bold text-2xl sm:text-2xl md:text-3xl text-yellow-400 h-16">
          (260)-4811711
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-2/4">
          <Link to="/menu"className="h-11 w-5/4 sm:w-3/4 bg-white text-black hover:bg-gray-300 font-semibold flex items-center justify-center m-3">
            Pedí ahora
          </Link>
          <Link to='/contact' className="h-11 w-5/4 sm:w-3/4 bg-yellow-600 text-white hover:bg-yellow-500 font-semibold flex items-center justify-center m-3">
            Escribinos
          </Link>
        </div>
      </div>
    </div>
  );
};