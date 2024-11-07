import axios from "./axios";

export const crearTareaRequest = async(tarea) => {
    try {
        const respuesta = await axios.post("/tareas", tarea);
        return respuesta.tarea
    } catch (error) {
        console.log(error);
    } 
}

export const obtenerTareasRequest = async() => axios.get("/tareas");

export const eliminarTareaRequest = async(id) => axios.delete(`/tareas/${id}`)