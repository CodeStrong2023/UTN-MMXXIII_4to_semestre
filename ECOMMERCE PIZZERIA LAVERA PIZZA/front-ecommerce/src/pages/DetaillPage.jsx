import { useParams, useNavigate } from "react-router-dom"
import { pizzas } from "../api/mocks/DataPizzeriaLavera"
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";

const DetaillPage = () => {
    const { id } = useParams();
    const product = pizzas.find((product) => product.id === parseInt(id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!product) {
        return <h1>Producto no encontrado</h1>
    }

    const handleClick = () => {
        dispatch(addCart(product))
        console.log('Producto agregado al carrito')
    }
    const seguirComprando = () => {
        navigate('/allproducts')

    }

    return (
        <div className='h-full w- flex items-center justify-center'>
            <section className='w-2/3 h-2/3 flex '>
                <img src={product.image} alt="" className='h-full w-1/2 flex items-center justify-center ' />
                <article className='w-1/2 flex flex-col items-center justify-center gap-7'>
                    <div>
                        <h1>{product.name}</h1>
                        <p>Descripción del producto</p>
                        <h2>Precio: $ {product.price}</h2>
                        <div className="flex flex-col gap-4" >
                            <button onClick={handleClick}>
                                Agregar al carrito
                            </button>
                            <button onClick={seguirComprando}>
                                seguir comprando
                            </button>
                        </div>                       
                    </div>
                </article>
            </section>
        </div>
    )
}

export default DetaillPage