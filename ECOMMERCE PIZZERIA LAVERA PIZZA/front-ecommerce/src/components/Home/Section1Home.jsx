import React from 'react'
import fondo from '../../assets/images/pizzeria_75.jpg'
import { MainButon } from '../MainButon'

export const Section1Home = () => {
  return (
    <div className='w-screen max-w-none h-full  text-white flex flex-row items-center justify-center  '>
      <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-10' />
      <section className='h-2/3 w-2/4 flex flex-col gap-9 items-start '>
        <div>
          <h1 className=' 2xl:text-9xl transform rotate-[-14deg] p'>La Vera</h1>
          <h1 className='2xl:text-9xltransform rotate-[-14deg] p'>Pizzeria</h1>
        </div>
        <p className='text-sm 2xl:text-base text-justify w-2/4 pt-14 '>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor
          risus. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris b
        </p>
        <MainButon text='Order online' />
      </section>
    </div>
  )
}
