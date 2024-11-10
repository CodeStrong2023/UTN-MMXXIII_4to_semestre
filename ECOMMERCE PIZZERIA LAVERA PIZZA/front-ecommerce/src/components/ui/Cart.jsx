import cartIcon from '../../assets/images/cartIcon.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cart);
  const cart = cartItems.length;

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div 
      className='flex items-center justify-center relative cursor-pointer' 
      onClick={handleClick} 
      aria-label="View Cart"
    >
      {/* Icono de Carrito */}
      <img 
        src={cartIcon} 
        alt="Cart icon" 
        className="h-7 w-7 transition-transform duration-200 hover:scale-110 bg-blue-400 rounded-full p-1"
      />

      {/* Badge de Cantidad */}
      {cart > 0 && (
        <span 
          className='absolute -top-2 -right-2 w-5 h-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center shadow-lg'
        >
          {cart}
        </span>
      )}
    </div>
  );
};

export default Cart;
