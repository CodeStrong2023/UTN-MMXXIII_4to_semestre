import { useSelector, useDispatch } from 'react-redux';
import CartCard from '../components/ui/CartCard';
import { removeCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import fondo from '../..//src/assets/images/pizzeria_76.jpg';

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);

    const total = cart.cart.reduce((acc, item) => {
        const quantity = item.quantity || 1; 
        return acc + item.priceCalc * quantity;
    }, 0);
    

    const handleRemove = () => {
        dispatch(removeCart());
    };

    const handleBuy = () => {
        navigate('/allProducts');
    };
    console.log(cart.cart);
    return (
        <div className='h-full w-full flex items-center justify-center gap-5'>
            <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-20' />
            <article className='w-3/5 relative'>
                <ul className='max-h-[500px] overflow-y-scroll bg-white p-5 rounded-lg '>
                    {cart.cart?.map((producto) => (
                        <CartCard key={producto.id} producto={producto} />
                    ))}
                </ul>
                {/* Degradado en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
            </article>
            <article className='h-[500px] w-1/5'>
                <div className='h-full flex flex-col items-center justify-between gap-4 bg-gray-800 p-4 rounded-lg shadow-md text-white'>
                    
                    <div className='h-[200px] flex flex-col gap-5'>
                        <h2 className='text-2xl font-bold'>Resumen</h2>
                        <p className='text-lg'>Total: <span className='font-semibold'>${total}</span></p>
                        <p className='text-sm text-gray-400'>Envio: <span className='font-semibold'>$1.400</span> (Solo en San Rafael)</p>
                    </div>
                    <div className='flex flex-col gap-3 w-3/4'>
                        <button
                            onClick={handleRemove}
                            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-300 ease-in-out'>
                            Vaciar carrito
                        </button>
                        <button
                            onClick={handleBuy}
                            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-300 ease-in-out'>
                            Seguir comprando
                        </button>
                        <button
                            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded transition duration-300 ease-in-out'>
                            PAGAR
                        </button>
                    </div>
                </div>

            </article>
        </div>
    );
};

export default CartPage;
