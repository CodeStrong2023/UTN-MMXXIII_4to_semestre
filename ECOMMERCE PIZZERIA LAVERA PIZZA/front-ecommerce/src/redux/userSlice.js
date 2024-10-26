import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userLoading: false,
    email: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, userLoading, email } = action.payload;
            state.user = name;
            state.userLoading = userLoading;
            state.email = email;
        },
        removeUser: (state) => {
            state.user = null;
            state.userLoading = false;
            state.email = "";
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { addUser, removeUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
