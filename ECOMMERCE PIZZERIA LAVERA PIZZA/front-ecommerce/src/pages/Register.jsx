import React from 'react'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const customSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='h-full w-full'>
        <form action={handleSubmit(customSubmit)} className='flex flex-col gap-6'>
            <input type="name" placeholder="Name" {
                ...register('name', {
                    required: true
                })
            } />
            <input type="email" placeholder="Email" {
                ...register('email', {
                    required: true,
                    validate: isEmail
                })
            }
            />
            <input type="phone" placeholder="Phone"{
                ...register('phone', {
                    required: true
                })
            } />
            <input type="address" placeholder="Address"{
                ...register('address', {
                    required: true
                })
            } />
            <input type="password" placeholder="Contraseña" />
            <input type="password" placeholder="Confirmar contraseña" />
            <button>Registrarse </button>
        </form>
        
    </div>
  )
}

export default Register
