import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { useNavigate, Link } from 'react-router-dom';
import { userService } from '../api/axios/services';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const navigate = useNavigate();

    const customSubmit = async (data) => {
        try {
            await userService.register(data);
            navigate('/login');
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            alert("Hubo un error al registrar el usuario, por favor inténtalo nuevamente.");
        }
    };

    return (
        <div className='h-full w-full flex items-center justify-center relative text-white bg-gradient-to-r from-gray-900 to-gray-700'>
            {/* Fondo */}
            <img src="/path/to/fondo.jpg" alt="Background" className="absolute w-screen h-full -z-10 object-cover" />

            <form 
                onSubmit={handleSubmit(customSubmit)} 
                className='w-full max-w-md p-8 bg-black/70 rounded-lg shadow-lg space-y-6'
            >
                <h2 className="text-2xl font-semibold text-center text-white">Registro</h2>

                {/* Nombre */}
                <div>
                    <input 
                        type="text"
                        placeholder="Nombre"
                        {...register('nombre', { required: "El nombre es obligatorio" })}
                        className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.nombre && <p className="mt-1 text-sm text-red-400">{errors.nombre.message}</p>}
                </div>

                {/* Username */}
                <div>
                    <input 
                        type="text"
                        placeholder="Username"
                        {...register('userName', { required: "El username es obligatorio" })}
                        className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.userName && <p className="mt-1 text-sm text-red-400">{errors.userName.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <input 
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: "El email es obligatorio",
                            validate: isEmail
                        })}
                        className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>

                {/* Contraseña */}
                <div>
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
                        className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>}
                </div>

                {/* Confirmar Contraseña */}
                <div>
                    <input 
                        type="password"
                        placeholder="Confirmar contraseña"
                        {...register('confirmPassword', {
                            validate: value => value === password || "Las contraseñas no coinciden"
                        })}
                        className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>}
                </div>

                <Link to='/login' className="text-blue-400 hover:underline text-center text-sm">¿Ya tienes cuenta? Ingresa aquí</Link>

                {/* Botón Enviar */}
                <button 
                    type="submit" 
                    className='w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Register;
