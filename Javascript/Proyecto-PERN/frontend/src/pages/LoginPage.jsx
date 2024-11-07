/* eslint-disable react/jsx-key */
import { Link, useNavigate } from 'react-router-dom'
import {Card, Input, Button, Label, Container} from '../components/ui'
import { useForm} from  'react-hook-form';
import { useAuth} from '../context/useAuth';


function LoginPage() {
  const { register,  handleSubmit, } = useForm()
  const { signin, errors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
    const user = await signin(data);
    if (user) {
      navigate("/perfil");
    }
  });


  return (
    <Container className=' h-[calc(100vh-10rem)] flex items-center justify-center'>
      <Card>
        {
          errors && errors.map((error) => (
           <p className='text-red-500 text-center mb-2'>{error}</p>
          ))
        }
        <h3 className='text-2xl font-bold my-2 text-center'>Inicia sesión</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor='email'>Email</Label>
          <Input type="email" placeholder="Ingrese su email" {...register("email",{
            required: true,
          })}/>
          <Label htmlFor='password'>Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña" {...register("password", {
            required: true,
          })} />
          <Button type="submit">Iniciar sesión</Button>
        </form>
        <div className=' flex justify-between my-4'>
          <p>¿No tenes una cuenta?</p>
          <Link to='/register'>Registrate</Link>
        </div>
      </Card>
    </Container>
  )
}

export default LoginPage