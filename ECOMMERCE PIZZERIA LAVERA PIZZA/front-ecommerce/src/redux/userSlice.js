import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:"invitado",
    userName: "invitado",
    userLoading: true,
    email: "invitado@gmail.com" 
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, userName, userLoading, email } = action.payload;
            state.user = name;
            state.userName = userName;
            state.userLoading = userLoading;
            state.email = email;
        },
        removeUser: (state) => {
            state.user = null;
            state.userName = "";
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
