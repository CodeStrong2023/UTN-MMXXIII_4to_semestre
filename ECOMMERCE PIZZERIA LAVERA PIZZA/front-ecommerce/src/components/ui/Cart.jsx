import cartIcon from '/icons/cartIcon.svg'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const cart = 4 //useSelector(state => state.cart)


  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <div className='flex items-center justify-center relative' onClick={handleClick} >
      <img src={cartIcon} alt="" className="h-6 w-6" />
      <span className='absolute top-0 -right-1 w-3 h-3 text-[10px] text-white bg-red-500 text-center rounded-lg flex items-center justify-center'>
        {cart}
      </span>
    </div>
  )
}

export default Cart