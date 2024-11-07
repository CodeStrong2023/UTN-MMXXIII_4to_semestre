import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
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
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit(customSubmit)} className='flex flex-col gap-6'>
                <input 
                    type="text"
                    placeholder="Nombre"
                    {...register('nombre', { required: "El nombre es obligatorio" })}
                />
                {errors.nombre && <p>{errors.nombre.message}</p>}

                <input 
                    type="text"
                    placeholder="Username"
                    {...register('userName', { required: "El username es obligatorio" })}
                />
                {errors.userName && <p>{errors.userName.message}</p>}

                <input 
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                        required: "El email es obligatorio",
                        validate: isEmail
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}

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
                {errors.password && <p>{errors.password.message}</p>}

                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    {...register('confirmPassword', {
                        validate: value => value === password || "Las contraseñas no coinciden"
                    })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Register;