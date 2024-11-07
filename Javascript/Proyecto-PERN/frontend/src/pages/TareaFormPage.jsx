import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams} from  'react-router-dom';
import { useEffect, useState } from "react";
import { useTareas } from "../context/TareasContext";

function TareaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [postError, setPostError] = useState([]);
  const { crearTarea } = useTareas();

  const onSubmit = handleSubmit(async (data) => {
      const res = await crearTarea(data);
      if (res) {
        navigate("/tareas")
      }
  });

  useEffect(() => {
    if (params.id) {
      console.log("Editando");
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {
          postError && postError.map((error, i) => (
            <p className="text-red-500 text-center mb-2" key={i}>{error}</p>
          ))
        }
        <h1 className="text-3xl font-bold my-4">{params.id ? "Editar Tarea" : "Crear Tarea"}</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="titulo">Titulo</Label>
          <Input
            type="text"
            placeholder="Titulo"
            autoFocus
            {...register("titulo", { required: true })}
          />
          {
            errors.titulo && <p className="text-red-500 text-center mb-2">El titulo es requerido</p>
          }
          <Label htmlFor="descripcion">Descripcion</Label>
          <Textarea
            type="text"
            placeholder="Descripción"
            rows={3}
            {...register("descripcion", { required: true })}
          />
          <Button>{params.id ? "Aceptar" : "Guardar"}</Button>
        </form>
      </Card>
    </div>
  );
}

export default TareaFormPage;
