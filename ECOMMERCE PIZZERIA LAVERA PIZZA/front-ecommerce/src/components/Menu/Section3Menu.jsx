import { CardPizza } from "../ui/CardPizzas";
import fondo from "../../assets/images/pizzeria_76.jpg";
import { useState, useEffect } from "react";
import { productsService } from "../../api/axios/services";

export const Section3Menu = () => {
  const [products, setProducts] = useState([]);
  const listProducts = [45, 40, 42, 43, 31, 28, 30, 21];

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productsService.getProducts();
      const filterProducts = products.filter((product) => {
        return listProducts.includes(product.id);
      });
      setProducts(filterProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div id="section3" className="w-screen h-auto text-white relative">
      <img src={fondo} alt="Fondo" className="absolute w-screen h-full -z-10 object-cover" />
      <div className="h-auto flex flex-col items-center justify-center">
        <h2 className="w-4/6 font-bold flex items-center text-white text-lg sm:text-2xl md:text-3xl m-3">
          PIZZAS DESTACADAS
        </h2>
        <div className="w-4/6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-center p-1 m-3">
          {products.slice(0, 3).map((element) => (
            <CardPizza key={element.id} pizzas={element} />
          ))}
        </div>
        <div className="w-4/6 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center justify-center p-1 m-3">
          {products.slice(4, 8).map((element) => (
            <CardPizza key={element.id} pizzas={element} />
          ))}
        </div>
      </div>
    </div>
  );
};
