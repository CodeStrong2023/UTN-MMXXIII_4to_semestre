import {CardPromoEspecial} from "../components/ui/";
import {promo} from "../api/mocks/promo";

function MenuPage() {
  return (
    <>
      <div className="bg-gray-900 h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <div className="bg-black h-[calc(100vh-290px)] w-2/4 flex items-center justify-center italic font-thin text-8xl">
          MENU
        </div>
        <div className="bg-blue-400 h-[calc(100vh-370px)] w-2/3 flex items-center ">
          <button className="h-28 w-1/4 bg-white text-black  hover:bg-gray-400 text-xl font-semibold flex items-center justify-center">
            PROMOS
          </button>
          <button className="h-28 w-1/4 bg-yellow-600 text-black  hover:bg-gray-400 text-xl font-semibold flex items-center justify-center">
            PIZZAS
          </button>
          <button className="h-28 w-1/4 bg-orange-600 text-black  hover:bg-gray-400 text-xl font-semibold flex items-center justify-center">
            SANGUCHES
          </button>
          <button className="h-28 w-1/4 bg-gray-800 text-white  hover:bg-gray-400 text-xl font-semibold flex items-center justify-center">
            BEBIDAS
          </button>
        </div>
      </div>
      <div className="bg-gray-900 h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <h2 className="">NUESTRAS PROMOS!</h2>
        <div className="h-64 w-3/4 bg-white text-black grid grid-cols-6 gap-4 items-center justify-center p-2 m-2">
          {promo.map(element => (
            <CardPromoEspecial key={element.id} promo={element}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;