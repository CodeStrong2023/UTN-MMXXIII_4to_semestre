export function CardPromoEspecial({promo}) {
  return (
    <div>
        <h1 className="font-thin">{promo.tittle}</h1>
        <p className="text-base text-gray-700">{promo.descripcion}</p>
        <span className="text-base font-bold text-gray-600">{promo.price}</span>
    </div>
  )
}

export default CardPromoEspecial