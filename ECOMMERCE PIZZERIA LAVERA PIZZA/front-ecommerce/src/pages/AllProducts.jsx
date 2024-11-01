import { pizzas } from "../api/mocks/DataPizzeriaLavera"
import { useState } from "react"
import { Link } from "react-router-dom"

const AllProducts = () => {
    const [pizzasfill, setpizzasfill] = useState(pizzas);
    const [search, setSearch] = useState(""); 
    const [category, setCategory] = useState("");


    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        const searchProduct = pizzas.filter((product) => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setpizzasfill(searchProduct);
    };


    const handleCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory); 
        const searchProduct = pizzas.filter((product) => {
            return product.category.toLowerCase().includes(selectedCategory.toLowerCase());
        });
        setpizzasfill(searchProduct);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <section className="h-1/2 w-full flex items-center justify-center gap-10 ">
                <article>
                    <h1>Buscador de productos por nombre</h1>
                    <input
                        type="text"
                        placeholder="Buscar productos"
                        onChange={handleSearch}
                        value={search} 
                    />
                </article>
                <article>
                    <h1>Buscador de productos por categoría</h1>
                    <select name="" id="" onChange={handleCategory} value={category}>
                        <option value="">Seleccionar categoría</option> 
                        <option value="Pizza">Pizza</option>
                        <option value="Bebida">Bebida</option>
                        <option value="Empanada">Empanada</option>
                        <option value="Lomito">Lomito</option>
                        <option value="Hamburguesa">Hamburguesa</option>
                    </select>
                </article>
            </section>
            <h1>Productos encontrados</h1>
            <div className="h-1/2 w-1/2 flex items-center justify-center flex-wrap gap-10 ">
                {pizzasfill.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                        <img src={product.image} alt="No Found image" className="h-24 w-24" />
                        <Link to={`/products/${product.id}`}>Ver detalle</Link>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
