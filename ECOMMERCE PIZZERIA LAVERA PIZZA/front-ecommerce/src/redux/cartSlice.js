import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../utils/localStorage";

const initialState = {
    cart: loadCartFromLocalStorage(),
    cartLoading: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = action.payload;
            const exists = state.cart.find(cartItem => cartItem.id === item.id);
            if (!exists) {
                state.cart = [...state.cart, item];
                saveCartToLocalStorage(state.cart);
            }
            
        },
        removeCart: (state) => {
            state.cart = [];
            saveCartToLocalStorage(state.cart);
        },
        removeCartItem: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter(item => item.id !== itemId);
            saveCartToLocalStorage(state.cart);
        },
        // colonar al item, cambuiar cantidad y remplazar 
        //preguntar porque no deberia mutar objetos en estados y funcions de js y react
        updateCartItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
                saveCartToLocalStorage(state.cart);
            }
        },
        syncCart: (state) => {
            state.cart = loadCartFromLocalStorage();
        },
        changeCartLoading: (state, action) => {
            state.cartLoading = action.payload;
        }
    }
});

export const { addCart, removeCart, removeCartItem, updateCartItemQuantity, syncCart, changeCartLoading } = cartSlice.actions;
export default cartSlice.reducer;
