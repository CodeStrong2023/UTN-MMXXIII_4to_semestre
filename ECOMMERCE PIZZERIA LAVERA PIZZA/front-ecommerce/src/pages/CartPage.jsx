
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../components/ui/CartCard'
import { removeCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(cart.cart)

    const handleRemove = () => {
        dispatch(removeCart())
    }

    const handleBuy = () => {
        navigate('/allProducts')
    }


    return (
        <div className='h-full w-full flex items-center justify-center'>
            <section className='w-2/3' >
                <h1>Carrito de compras</h1>
                <article>
                    <div className='flex gap-10 mt-7'>
                        <button onClick={handleRemove}>vaciar carrito</button>
                        <button onClick={handleBuy}>seguir comprando</button>
                        <button>PAGAR</button>
                    </div>


                    <ul>
                        {cart.cart?.map((producto) => (
                            <CartCard key={producto.id} producto={producto} />
                        ))}
                    </ul>


                </article>
            </section>
        </div>
    )
}

export default CartPage