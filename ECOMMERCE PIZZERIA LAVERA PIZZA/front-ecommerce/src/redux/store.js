import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import { saveCartToLocalStorage } from "../utils/localStorage"; // Asegúrate de importar la función

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});

// Suscribirse a cambios en el estado y guardar el carrito en localStorage
store.subscribe(() => {
    const { cart } = store.getState();
    saveCartToLocalStorage(cart.cart); // Persistir solo el estado de 'cart'
});
