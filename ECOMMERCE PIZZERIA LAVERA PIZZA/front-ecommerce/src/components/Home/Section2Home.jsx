import React from 'react'
import { pizzas } from '../../api/mocks/pizzas'
import CardMenu from '../CardMenu'
import { MainButon } from '../MainButon'
import fondo from '../../assets/images/pizzeria_76.jpg'
import pizza from '../../assets/images/pizzeria_14.png'
import { useNavigate } from 'react-router-dom'

const Section2Home = () => {
  const navigate = useNavigate()
  const seguirComprando = () => {
    navigate('/menu')
  }

    return (
        <div className='h-screen flex items-center justify-around p-0 m-0 relative'>
            <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-20' />
            <img src={pizza} alt="" className='absolute -z-10 h-3/4 left-[5%]' />
            <div></div>
          <section className='w-2/5 2xl:w-1/3 flex flex-wrap gap-7 justify-end'>
            {pizzas.map((pizza) => (
              <CardMenu key={pizza.id} product={pizza} />
            ))}
            <div onClick={seguirComprando}>
              <MainButon text='Promociones' />
            </div>
            
          </section>
        </div>
      );
}

export default Section2Home