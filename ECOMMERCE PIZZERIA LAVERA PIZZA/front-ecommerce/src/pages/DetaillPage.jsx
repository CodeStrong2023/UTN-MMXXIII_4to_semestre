import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { productsService } from "../api/axios/services";
import { useEffect, useState } from "react";
import fondo from '../..//src/assets/images/pizzeria_76.jpg';

const DetaillPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await productsService.getProductById(id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <h1>Cargando...</h1>; // Mensaje de carga
    }

    if (!product) {
        return <h1>Producto no encontrado</h1>;
    }

    const handleClick = () => {
        dispatch(addCart(product));
        console.log('Producto agregado al carrito');
    };

    const seguirComprando = () => {
        navigate('/menu');
    };

    return (
        <div className='h-full w-full flex items-center justify-center '>
            <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-20' />
            <section className='w-2/3 h-2/3 flex bg-neutral-900 bg-opacity-90 p-6 rounded-lg shadow-lg gap-8'>
                <img src={product.image} alt={product.name} className='h-full w-1/2 rounded-lg' />
                <article className='w-1/2 flex flex-col items-center justify-center gap-7'>
                    <div className="flex flex-col justify-between items-start gap-7 text-white">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <article>
                            <p className="text-sm">Descripción del producto:</p>
                            <p>{product.description}</p> 
                        </article>
                        <h2 className="text-lg">Precio: $<span className="text-sm"> {product.price}</span></h2>
                        <div className="flex flex-col gap-4">
                            <button onClick={handleClick} className="p-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                Agregar al carrito
                            </button>
                            <button onClick={seguirComprando} className="p-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Seguir comprando
                            </button>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default DetaillPage;
