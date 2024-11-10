

const CardOrders = ({order}) => {
  return (
    <div className='h-1/2 flex flex-col gap-5 items-start'>
        <img className='h-14 w-14' src={order.icon} alt="noun found" />
        <h1>{order.type}</h1>
        <p className='w-72 text-start'>{order.text}</p>
    </div>
  )
}

export default CardOrders