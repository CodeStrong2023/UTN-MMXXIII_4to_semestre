import { CardPromoEspecial } from "../ui/CardPromoEspecial";
import { promo } from "../../api/mocks/promo";
import fondo from "../../assets/images/pizzeria_76.jpg";

export const Section2Menu = () => {
  return (
    <div id="section2" className="w-screen h-auto sm:h-screen md:h-screen  text-white relative">
      <img
        src={fondo}
        alt=""
        className="absolute w-screen h-full sm:h-screen -z-10 object-cover"
      />
      <div className="flex flex-col items-center justify-center h-auto sm:h-dvh md:h-dvh">
        <h2 className="w-4/6 font-bold text-white text-lg sm:text-2xl md:text-2xl text-center mt-2">
          NUESTRAS PROMOS!
        </h2>
        <div className="h-auto w-4/6 bg-white text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center p-4 m-4 text-xl">
          {promo.map(element => (
            <CardPromoEspecial key={element.id} promo={element} />
          ))}
        </div>
      </div>
    </div>
  );
};