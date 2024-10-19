export function CardPromoEspecial({promo}) {
  return (
    <div>
        <h1>{promo.tittle}</h1>
        <p>{promo.descripcion}</p>
        <span>{promo.price}</span>
    </div>
  )
}

export default CardPromoEspecial