import { useSelector, useDispatch } from 'react-redux';
import CartCard from '../components/ui/CartCard';
import { removeCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import fondo from '../..//src/assets/images/pizzeria_76.jpg';
import { useEffect, useState } from 'react';
import { Payment } from '@mercadopago/sdk-react';
import axiosconfig from '../api/axios/axios';
import { initMercadoPago } from '@mercadopago/sdk-react';


const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart || { cart: [] });
    const user = useSelector(state => state.user);
    const publicKey = import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY;
    const [initialization, setInitialization] = useState(null);

    useEffect(() => {
        if (publicKey) {
            initMercadoPago(publicKey); // Inicializa Mercado Pago solo si la clave pública está definida
        }
    }, [publicKey]);

    const total = cart.cart.reduce((acc, item) => {
        const quantity = item.quantity || 1;
        return acc + item.priceCalc * quantity;
    }, 0);

    const handleCreatePreference = async () => {
        if (user.user === "invitado") {
            navigate('/login');
            return;
        }

        const preferenceData = {
            items: cart.cart.map(product => ({
                id: product.id,
                title: product.name,
                unitPrice: product.priceCalc / 100,
                quantity: product.quantity || 1,
            })),
            successUrl: "http://localhost:5173/success",
            failureUrl: "http://localhost:5173/fail",
            pendingUrl: "http://localhost:5173/home",
        };

        try {
            const response = await fetch("http://localhost:8080/create-preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(preferenceData)
            });

            if (response.ok) {
                const preference = await response.json();
                const preferenceId = preference.id;
                setInitialization({
                    amount: total,
                    preferenceId: preferenceId,
                });
            } else {
                console.error("Error al obtener el ID de preferencia:", await response.text());
            }
        } catch (error) {
            console.error("Error al crear la preferencia:", error);
        }
    };

    const handlePaymentSubmit = async (formData) => {
        try {
            const response = await fetch(`${axiosconfig}/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error en el envío del pago: ' + response.statusText);
            }
            return response.json();
        } catch (error) {
            console.error("Error en el envío del pago:", error);
            throw error;
        }
    };

    const onError = (error) => {
        console.log("Error en el pago:", error);
    };

    const onReady = () => {
        // Puedes añadir lógica aquí para ocultar cualquier carga visual
    };
    

    return (
        <div className='h-full w-full flex items-center justify-center gap-5'>
            <img src={fondo} alt="" className='absolute w-screen max-w-none h-full -z-20' />

            {initialization && (
                <div className="fixed  flex items-center justify-center bg-black bg-opacity-50 z-30">
                    <Payment
                        initialization={initialization}
                        customization={{
                            paymentMethods: {
                                ticket: "all",
                                creditCard: "all",
                                debitCard: "all",
                                mercadoPago: "all",
                            },
                        }}
                        onSubmit={handlePaymentSubmit}
                        onReady={onReady}
                        onError={onError}
                    />
                </div>
            )}
            <article className='w-3/5 relative'>
                <ul className='max-h-[500px] overflow-y-scroll bg-white p-5 rounded-lg '>
                    {cart.cart.map((producto) => (
                        <CartCard key={producto.id} producto={producto} />
                    ))}
                </ul>
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
                            onClick={() => dispatch(removeCart())}
                            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-300 ease-in-out'>
                            Vaciar carrito
                        </button>
                        <button
                            onClick={() => navigate('/menu')}
                            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-300 ease-in-out'>
                            Seguir comprando
                        </button>
                        <button
                            onClick={handleCreatePreference}
                            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded transition duration-300 ease-in-out'>
                            Comprar
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default CartPage;
