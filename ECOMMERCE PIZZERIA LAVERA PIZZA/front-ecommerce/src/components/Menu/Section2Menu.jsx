import {CardPromoEspecial} from "../ui/CardPromoEspecial";
import {promo} from "../../api/mocks/promo";
import fondo from "../../assets/images/pizzeria_76.jpg";

export const Section2Menu = () => {
  return (
    <div className="w-screen max-w-none h-full  text-white items-center justify-center  ">
      <img
        src={fondo} alt="" className="absolute  w-screen max-w-none h-full -z-10"/>
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <h2 className="h-20 w-4/6 font-bold flex items-center text-white text-3xl">NUESTRAS PROMOS!</h2>
        <div className="h-2/3 w-4/6 bg-white text-black grid grid-cols-3 gap-4 items-center justify-center p-4 m-4 text-xl">
          {promo.map(element => (
            <CardPromoEspecial key={element.id} promo={element}/>
          ))}
        </div>
      </div>
    </div>
  );
};