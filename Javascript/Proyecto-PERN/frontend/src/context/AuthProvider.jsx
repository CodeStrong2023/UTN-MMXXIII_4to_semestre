/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    const signin = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signin", data, {
            withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);
    };

    const signup = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data, {
            withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuth,
            errors,
            signup,
            setUser,
            signin,
            setIsAuth,
            setErrors,
        }}>
            {children}
        </AuthContext.Provider>
    );
}