
//funciones de localStorage para cart
export const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return [];
    }
};

export const saveCartToLocalStorage = (cart) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem("cart", serializedCart);
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
};

//funciones de localStorage para user
export const loadUserFromLocalStorage = () => {
    try {
        const serializedUser = localStorage.getItem("user");
        return serializedUser ? JSON.parse(serializedUser) : null; // Cambiar a null para evitar problemas de asignación
    } catch (error) {
        console.error("Error loading user from localStorage:", error);
        return null; // Cambiar a null en caso de error
    }
};

export const saveUserToLocalStorage = (user) => {
    try {
        const serializedUser = JSON.stringify(user);
        localStorage.setItem("user", serializedUser);
    } catch (error) {
        console.error("Error saving user to localStorage:", error);
    }
};
