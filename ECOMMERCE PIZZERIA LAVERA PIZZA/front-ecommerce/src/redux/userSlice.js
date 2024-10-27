import { createSlice } from "@reduxjs/toolkit";
import { loadUserFromLocalStorage, saveUserToLocalStorage } from "../utils/localStorage";

// Estado inicial con verificación en localStorage
const initialState = loadUserFromLocalStorage() || {
    user: "invitado",
    userName: "invitado",
    userLoading: true,
    email: "invitado@gmail.com"
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("Esto es el action", action);

            // Asignamos propiedades específicas al estado
            state.user = action.payload.name || "invitado"; 
            state.userName = action.payload.userName || action.payload.name || "invitado";
            state.userLoading = true; 
            state.email = action.payload.email || "invitado@gmail.com";

            // Guardamos el estado completo en localStorage
            saveUserToLocalStorage({
                user: state.user,
                userName: state.userName,
                userLoading: state.userLoading,
                email: state.email
            });
            
            console.log("Estado actualizado:", state);
        },
        removeUser: (state) => {
            state.user = "invitado";
            state.userName = "invitado";
            state.userLoading = true;
            state.email = "invitado@gmail.com";

            saveUserToLocalStorage({
                user: state.user,
                userName: state.userName,
                userLoading: state.userLoading,
                email: state.email
            });
        },
        syncUser: (state) => {
            const loadedUser = loadUserFromLocalStorage();
            if (loadedUser) {
                state.user = loadedUser.user;
                state.userName = loadedUser.userName;
                state.userLoading = loadedUser.userLoading;
                state.email = loadedUser.email;
            }
        }
    }
});

export const { addUser, removeUser, syncUser } = userSlice.actions;
export default userSlice.reducer;