export const CardPizza = ({ pizzas }) => {
  return (
    <div className="bg-gradient-to-t from-gray-900 to-gray-700 rounded-lg shadow-lg overflow-hidden p-4 flex flex-col items-center">
      <img 
        src={pizzas.image} 
        alt={pizzas.name} 
        className="w-full h-40 object-cover rounded-md" 
      />
      <h3 className="text-white font-semibold text-lg mt-2">{pizzas.name}</h3>
      <p className="text-blue-500 font-bold mt-1">${pizzas.price}</p>
    </div>
  );
};
