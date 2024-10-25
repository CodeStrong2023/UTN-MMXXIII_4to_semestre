import { useParams } from "react-router-dom"
import { pizzas } from "../api/mocks/DataPizzeriaLavera"

const DetaillPage = () => {
    const { id } = useParams();
    const product = pizzas.find((product) => product.id === parseInt(id));

    if (!product) {
        return <h1>Producto no encontrado</h1>
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
                        <button>Agregar al carrito</button>
                    </div>

                </article>
            </section>
        </div>
    )
}

export default DetaillPage