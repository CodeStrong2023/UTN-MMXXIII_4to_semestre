import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsService } from "../api/axios/services";
import fondo from "../assets/images/pizzeria_76.jpg";


const AllProducts = () => {
    const [productsfill, setProductsfill] = useState([]);
    const [search, setSearch] = useState(""); 
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await productsService.getProducts();
            setProducts(products);
            setProductsfill(products);
        };
        fetchProducts();
    }, []);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        const searchProduct = products.filter((product) => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setProductsfill(searchProduct);
    };

    const handleCategory = (e) => {
        const selectedCategory = e.target.value; 
        setCategory(selectedCategory); 
        const searchProduct = products.filter((product) => {
            return product.category.toLowerCase().includes(selectedCategory.toLowerCase());
        });
        setProductsfill(searchProduct);
    };

    return (

        <div className="min-h-screen top-10 flex flex-col items-center justify-center gap-10 p-4 text-white">
            <img src={fondo} alt="" className="absolute w-screen h-full -z-10 object-cover"/>
            <section className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10 mb-6">
                <article className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold mb-2">Buscador de productos por nombre</h1>
                    <input
                        type="text"
                        placeholder="Buscar productos"
                        onChange={handleSearch}
                        value={search}
                        className="text-black p-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </article>
                <article className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold mb-2">Buscador de productos por categoría</h1>
                    <select 
                        onChange={handleCategory} 
                        value={category}
                        className="p-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    >
                        <option value="">Seleccionar categoría</option>
                        <option value="pizzas">Pizza</option>
                        <option value="pizzas rellenas">Pizza rellena</option>
                        <option value="empanadas">Empanada</option>
                        <option value="lomos">Lomos</option>
                        <option value="hamburgesas">Hamburguesa</option>
                        <option value="fritos">Fritos</option>
                    </select>
                </article>
            </section>
            <h1 className="text-2xl font-bold mb-4">Productos encontrados</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full md:w-3/4">
                {productsfill.map((product) => (
                    <div key={product.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 h-64">
                        <h2 className="text-sm font-semibold text-white text-thin">{product.name}</h2>
                        <h3 className="text-md font-medium text-gray-400">${product.price}</h3>
                        <img src={product.image} alt="No Found image" className="h-24 w-24 object-cover rounded-md my-2" />
                        <Link 
                            to={`/products/${product.id}`}
                            className="mt-2 text-blue-500 hover:text-blue-300 underline"
                        >
                            Ver detalle
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
