import {CardPizza} from "../ui/CardPizzas";
import {pizzas} from "../../api/mocks/pizzas";
import fondo from "../../assets/images/pizzeria_76.jpg";

export const Section3Menu = () => {
  return (
    <div id="section3" className="w-screen h-auto text-white relative">
      <img
        src={fondo}
        alt=""
        className="absolute w-screen h-full -z-10 object-cover"
        />
      <div className="h-auto flex flex-col items-center justify-center">
        <h2 className="w-4/6 font-bold flex items-center text-white text-lg sm:text-2xl md:text-3xl m-3">PIZZAS DESTACADAS</h2>
        <div className="w-4/6 bg-transparent text-black grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-center p-1 m-3 text-xl">
            <CardPizza key={pizzas[0].id} pizzas={pizzas[0]}/>
            <CardPizza key={pizzas[2].id} pizzas={pizzas[2]}/>
            <CardPizza key={pizzas[3].id} pizzas={pizzas[3]}/>
        </div>
        <div className="w-4/6 bg-transparent text-black grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center justify-center p-1 m-3 text-xl">
            <CardPizza key={pizzas[0].id} pizzas={pizzas[0]}/>
            <CardPizza key={pizzas[1].id} pizzas={pizzas[1]}/>
            <CardPizza key={pizzas[2].id} pizzas={pizzas[2]}/>
            <CardPizza key={pizzas[3].id} pizzas={pizzas[3]}/>
        </div>
      </div>
    </div>
  );
};