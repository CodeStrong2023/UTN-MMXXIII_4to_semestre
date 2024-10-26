
import { useSelector } from 'react-redux'
import CartCard from '../components/ui/CartCard'

const CartPage = () => {
    const cart = useSelector(state => state.cart)

    console.log(cart.cart)

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <section className='w-2/3' >
                <article>
                    <h1>Carrito de compras</h1>
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