import axios from "axios";

const cliente = axios.create({
    baseURL: "http://localhost:3000/api",
    whitCredentials: true
});

export default cliente;