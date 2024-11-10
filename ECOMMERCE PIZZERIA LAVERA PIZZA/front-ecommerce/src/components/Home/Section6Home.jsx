import React from 'react'
import { Link } from 'react-router-dom'

const Section6Home = () => {
    return (
        <div className='h-full w-full bg-gradient-to-b from-black to-gray-500 flex items-center justify-center '>
            <section className='flex flex-col justify-center items-center '>
                <h1 className='text-white text-5xl pb-14'>
                    CENA CON NOSOTROS
                </h1>
                <div className='text-flu-Primary-Yellow text-3xl pb-10 '>
                    <p> (260)-4811711 </p>
                </div>
                <div className=' flex flex-col gap-5 w-72'>
                    <Link to='/menu' className='bg-white text-black w-full text-center pt-2 pb-2 hover:bg-slate-400'>
                        Ordena online
                    </Link>
                    <Link to='/contact' className='bg-flu-Primary-Orange text-white w-full text-center pt-2 pb-2 hover:bg-orange-600 '>
                        Contactanos
                    </Link>
                </div>

            </section>

        </div>
    )
}

export default Section6Home