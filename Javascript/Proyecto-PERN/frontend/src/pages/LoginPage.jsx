import { Link, useNavigate } from 'react-router-dom'
import {Card, Input, Button, Label} from '../components/ui'
import { useForm} from  'react-hook-form';
import { useAuth} from '../context/useAuth';


function LoginPage() {
  const { register,  handleSubmit, } = useForm()
  const { signin } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
    await signin(data);
    navigate("/perfil");
  });


  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
      <Card>
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
    </div>
  )
}

export default LoginPage