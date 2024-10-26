import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartLoading: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        removeCart: (state) => {
            state.cart = [];
        },
        removeCartItem: (state, action) => {
            const itemId = action.payload; 
            state.cart = state.cart.filter(item => item.id !== itemId); 
        },
        changeCartLoading: (state, action) => {
            state.cartLoading = action.payload;
        }
    }
});

export const { addCart, removeCart, removeCartItem, changeCartLoading } = cartSlice.actions;

export default cartSlice.reducer;
