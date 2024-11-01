import {CardPizza} from "../ui/CardPizzas";
import {pizzas} from "../../api/mocks/pizzas";
import fondo from "../../assets/images/pizzeria_76.jpg";

export const Section3Menu = () => {
  return (
    <div className="w-screen max-w-none h-full  text-white items-center justify-center  ">
      <img
        src={fondo} alt="" className="absolute  w-screen max-w-none h-full -z-10"/>
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <h2 className="h-20 w-4/6 font-bold flex items-center text-white text-3xl m-3">NUESTRAS PIZZAS</h2>
        <div className="w-4/6 bg-transparent text-black grid grid-cols-3 gap-4 items-center justify-center p-1 m-1 text-xl">
            <CardPizza key={pizzas[0].id} pizzas={pizzas[0]}/>
            <CardPizza key={pizzas[2].id} pizzas={pizzas[2]}/>
            <CardPizza key={pizzas[3].id} pizzas={pizzas[3]}/>
        </div>
        <div className="w-4/6 bg-transparent text-black grid grid-cols-4 gap-4 items-center justify-center p-1 m-1 text-xl">
            <CardPizza key={pizzas[0].id} pizzas={pizzas[0]}/>
            <CardPizza key={pizzas[1].id} pizzas={pizzas[1]}/>
            <CardPizza key={pizzas[2].id} pizzas={pizzas[2]}/>
            <CardPizza key={pizzas[3].id} pizzas={pizzas[3]}/>
        </div>
      </div>
    </div>
  );
};