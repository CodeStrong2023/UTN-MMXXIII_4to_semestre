import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';

const IniciarSesion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    console.log("esto es el redux usaer", user)
    console.log(user.userLoading)

    const customSubmit = (data) => {
        console.log(data)

        
        dispatch(addUser(data))
        navigate('/')
    }

    return (
        <div className='h-full w-full flex items-center justify-center' >
            <form onSubmit={handleSubmit(customSubmit)} className='flex flex-col gap-7'>
            <input type="name" placeholder="Name" {...register('name', {
                    required: true,
                    
                })} />
                <input type="email" placeholder="Email" {...register('email', {
                    required: true,
                    validate: isEmail
                })} />
                {errors.email && <span>{errors.email.message}</span>}
                <input type="password" placeholder="Contraseña" {...register('password', {
                    required: "La contraseña es requerida",
                    minLength: {
                        value: 8,
                        message: "La contraseña debe tener al menos 8 caracteres"
                    },
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "La contraseña debe tener al menos una mayúscula, un número y un carácter especial"
                    }
                })} />
                <Link to='/register'>Registrate</Link>
                <button>Iniciar Sesión</button>
            </form>
            <div className='h-full w-1/3 flex flex-col items-center justify-center gap-6'>
                <h1>Usuarios</h1>
                <ul>
                    <li>{user.user}</li>
                </ul>

            </div>
        </div>
    )
}

export default IniciarSesion