export function CardPizza({pizzas}) {
    return (
      <div className="bg-slate-700 m-0.5">
        <img src={pizzas.image} alt="No Found image" className='h-52 sm:h-2/3 md:h-2/3 w-full object-cover' />
        <h1 className="m-2 font-medium text-xs text-white">{pizzas.name}</h1>
        <span className="flex aling-items text-base m-2 font-light text-yellow-400">{pizzas.price}</span>
      </div>
    )
  };