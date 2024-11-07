import axiosconfig from "./axios";
import { mapProductData } from "./middleware";

export const productsService = {
    getProducts: async () => {
        const response = await axiosconfig.get("/products");
        return response.data.map(mapProductData);
    },
    getProductById: async (id) => {
        const response = await axiosconfig.get(`/products/${id}`);
        return  mapProductData(response.data);
    },
    createProduct: async (product) => {
        const response = await axiosconfig.post("/products", product);
        return response.data;
    },
    /*updateProduct: async (product) => {
        const response = await axiosconfig.put(`/products/${product.id}`, product);
        return response.data;
    },*/
    deleteProduct: async (id) => {
        const response = await axiosconfig.delete(`/products/${id}`);
        return response.data;
    },
}

export const userService = {
    register: async (user) => {
        try {
            const payload = {
                nombre: user.nombre,
                userName: user.userName,
                email: user.email,
                password: user.password,
                usuarioRole: "ROLE_USER" // Cambia según tu implementación
            };

            const response = await axiosconfig.post("/api/users/register", payload);
            return response.data;
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const payload = { email, password };
            const response = await axiosconfig.post("/api/users/authenticate", payload);
            return response.data;  // Devuelve los datos de usuario, token, etc., según tu backend
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            throw error;
        }
    }
}