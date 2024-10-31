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
     
}