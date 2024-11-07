import axios from "axios";

const axiosconfig = axios.create({
    baseURL: "http://localhost:8080",  // Verifica que esta URL sea la correcta
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosconfig;