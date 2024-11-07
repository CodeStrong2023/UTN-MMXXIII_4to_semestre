import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { userService } from '../api/axios/services';

const IniciarSesion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    const customSubmit = async (data) => {
        try {
            const response = await userService.login(data.email, data.password);
            console.log("Respuesta del servidor:", response);

            const userData = {
                nombre: response.nombre,
                userName: response.userName,
                email: response.email,
                role: response.usuarioRole,
            };

            dispatch(addUser(userData));
            console.log("Usuario logueado:", userData);

            navigate('/');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Error al iniciar sesión, verifica tus credenciales.");
        }
    };

    // Usamos useEffect para detectar cambios en el estado
    useEffect(() => {
        console.log("Estado global de usuario:", user);
    }, [user]); // Esto se ejecuta cada vez que el estado de user cambia

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <form onSubmit={handleSubmit(customSubmit)} className='flex flex-col gap-7'>
                <input 
                    type="email" 
                    placeholder="Email" 
                    {...register('email', {
                        required: "El correo es requerido",
                        validate: isEmail
                    })} 
                />
                {errors.email && <span>{errors.email.message}</span>}

                <input 
                    type="password" 
                    placeholder="Contraseña"  
                    {...register('password', {
                        required: "La contraseña es requerida",
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        },
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "La contraseña debe tener al menos una mayúscula, un número y un carácter especial"
                        }
                    })} 
                />
                {errors.password && <span>{errors.password.message}</span>}

                <Link to='/register'>Registrate</Link>
                <button type="submit">Iniciar Sesión</button>
            </form>

            <div className='h-full w-1/3 flex flex-col items-center justify-center gap-6'>
                <h1>Usuarios</h1>
                <ul>
                    <li>{user.user}</li>
                </ul>
            </div>
        </div>
    );
};

export default IniciarSesion;
