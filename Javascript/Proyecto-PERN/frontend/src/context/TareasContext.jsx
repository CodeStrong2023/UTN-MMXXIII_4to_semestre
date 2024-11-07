/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import {
  crearTareaRequest,
  eliminarTareaRequest,
  obtenerTareasRequest,
} from "../api/tareas.api";

const TareasContext = createContext();

export const useTareas = () => {
  const context = useContext(TareasContext);

  if (!context) {
    throw new Error("useTareas debe estar dentro del proveedor TareasProvider");
  }
  return context;
};

export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);
  const [errors, setError] = useState([]);

  const listarTareas = async () => {
    const res = await obtenerTareasRequest();
    setTareas(res.data);
  };

  const crearTarea = async () => {
    try {
      const res = await crearTareaRequest(tareas);
      setTareas([...tareas, res.data]);
      return res.tarea;
    } catch (error) {
      if (error.response) {
        setError([error.response.data.message]);
      }
    }
  };

  const eliminarTarea = async (id) => {
    const res = await eliminarTareaRequest(id);
    if (res.status === 204) {
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    }
  };
  return (
    <TareasContext.Provider
      value={{
        tareas,
        listarTareas,
        eliminarTarea,
        crearTarea
      }}
    >
      {children}
    </TareasContext.Provider>
  );
};
