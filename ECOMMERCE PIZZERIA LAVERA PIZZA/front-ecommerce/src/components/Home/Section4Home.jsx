import {orders} from '../../api/mocks/orders'
import CardOrders from '../CardOrders'
import fondo from '../../assets/images/pizzeria_31.jpg'

export const Section4Home = () => {
    return ( 
        
        <div className='h-3/5 w-full text-white relative flex flex-col items-center justify-center'>
            <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-10' />
            <section className='h-1/2'>
                <h1 className='text-5x1 font-semibold text-start pb-10'>BAKED TO ORDER</h1>
                <article className='flex gap-28 '>
                    {orders.map(order => (
                        <CardOrders key={order.id} order={order} />
                    ))}

                </article>
            </section>
        </div>
    )
}
