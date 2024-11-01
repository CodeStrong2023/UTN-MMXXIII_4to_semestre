
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const navigate = useNavigate();

    //modelo contraseña laLA88**

    const customSubmit = (data) => {
        console.log(data);

        // Aquí deberías hacer la petición a tu API

        navigate('/login')
    };

    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit(customSubmit)} className='flex flex-col gap-6'>
                <input 
                    type="text" // Cambiado a "text"
                    placeholder="Name" 
                    {...register('name', { required: true })} 
                />
                <input 
                    type="text" 
                    placeholder="Username" 
                    {...register('Username', { required: true })} 
                />

                <input 
                    type="email" 
                    placeholder="Email" 
                    {...register('email', {
                        required: true,
                        validate: isEmail
                    })} 
                />


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
