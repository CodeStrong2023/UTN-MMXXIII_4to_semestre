import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { userService } from '../api/axios/services';
import fondo from "../assets/images/pizzeria_76.jpg";

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

    useEffect(() => {
        console.log("Estado global de usuario:", user);
    }, [user]);

    return (
        <div className='h-screen w-full flex items-center justify-center relative bg-gradient-to-r from-gray-900 to-gray-700 text-white'>
            <img src={fondo} alt="" className="absolute w-full h-full object-cover -z-10 opacity-20"/>
            <div className="absolute inset-0 bg-black opacity-30 -z-10"></div>
            
            <form onSubmit={handleSubmit(customSubmit)} className='relative bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-10 w-full max-w-md mx-4 md:mx-0 flex flex-col gap-6 shadow-lg text-gray-200'>
                <h2 className="text-center text-2xl font-semibold mb-4 text-gray-100">Iniciar Sesión</h2>

                <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    {...register('email', {
                        required: "El correo es requerido",
                        validate: isEmail
                    })} 
                    className="p-3 rounded-lg bg-gray-800 bg-opacity-60 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}

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
                    className="p-3 rounded-lg bg-gray-800 bg-opacity-60 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}

                <Link to='/register' className="text-blue-400 hover:underline text-center text-sm">¿No tienes cuenta? Regístrate</Link>

                <button type="submit" className="p-3 mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default IniciarSesion;

