import { useEffect } from 'react';
import { removeCart } from '../redux/cartSlice';
import {  useDispatch } from 'react-redux';

const Succes = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    console.log('succes')
    dispatch(removeCart())
  },[])


  return (
    <div className='w-full h-full bg-black flex items-center justify-center'>
      <div className='h-80 w-80 rounded-lg flex items-center justify-center' >
        <h1 className='text-5xl font-semibold text-white'> 
          Gracias por su compra!!
        </h1>
      </div>
    </div>
  )
}

export default Succes