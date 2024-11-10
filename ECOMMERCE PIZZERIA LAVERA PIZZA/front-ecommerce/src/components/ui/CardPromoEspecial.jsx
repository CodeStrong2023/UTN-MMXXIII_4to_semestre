export function CardPromoEspecial({ promo }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <h1 className="font-semibold text-lg text-gray-800 mb-2">{promo.tittle}</h1>
      <p className="text-sm text-gray-600 mb-2">{promo.descripcion}</p>
      <span className="text-lg font-bold text-gray-900">{promo.price}</span>
    </div>
  );
}

export default CardPromoEspecial;