import React from 'react'
import fondo from '../../assets/images/pizzeria_76.jpg'

const Section3Home = () => {
  return (
    <div className='h-screen flex items-center justify-around relative'>
        <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-20' />
        <div></div>
        <section className='h-1/2 w-[300px] flex flex-col relative '>
              <h1 className='text-2xl font-semibold text-white text-start  pt-8 pb-6'>THIS WEEK'S SPECIAL OFFER</h1>
              <article className='h-96  bg-flu-Primary-Blue text-flu-Primary-Orange text-5xl flex flex-col gap-6 items-start justify-center pl-10 '>
                  <h2 className='transform rotate-[-12deg]'> BUY 1 </h2>
                  <h2 className='transform rotate-[-12deg]'> GET 1</h2>
                  <h2 className='transform rotate-[-12deg]'> FREE </h2>
              </article>
              <div className='absolute w-1/2 pt-6 pb-6 bg-white text-black -right-10 -bottom-2'>
                  Use this Coupon
              </div>
        </section>
       
    </div>
  )
}

export default Section3Home