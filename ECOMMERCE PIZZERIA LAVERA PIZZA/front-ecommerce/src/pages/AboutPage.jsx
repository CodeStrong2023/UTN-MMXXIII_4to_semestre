import React from 'react'
import fondo from "../assets/images/pizzeria_76.jpg";
import video from "../assets/images/pizzeria_75.jpg"

export const AboutPage = () => {
  return (
    <>
      {/* Contenedor principal */}
      <div className='flex flex-col items-center text-white relative'>
      <img src={fondo} alt="" className="absolute w-screen h-full -z-10 object-cover"/>
        {/* Título "Sobre Nosotros" */}
        <h1 className='h-[calc(100vh-750px)]  sm:h-[calc(100vh-600px)] md:h-[calc(100vh-600px)] w-2/3 sm:w-3/4 md:w-2/3 flex items-center justify-start italic font-thin text-3xl sm:text-6xl md:text-7xl'>
          Sobre Nosotros
        </h1>
        {/* Sección de la imagen y el texto */}
        <div className='flex flex-col items-center bg-transparent rounded-lg p-6 w-[80%]'>

          <div className="relative w-full mb-6">
            <img src={video} alt="Preparación de pizza" className="rounded-lg w-full h-auto object-cover"/>
          </div>
          {/* Texto "Nuestra Historia" */}
          <h2 className="text-1xl sm:text-2xl md:text-3xl font-semibold mb-4">Nuestra Historia</h2>
          {/* Contenedor con el año y la descripción */}
          <div className="flex flex-col md:flex-row items-start md:items-start">
            <div className='bg-yellow-300 p-4 mb-4 md:mb-0 md:mr-4 w-32 md:w-1/3 lg:w-2/6 h-20 md:h-28'>
              <p className='text-black italic text-xs md:text-md'>Desde</p>
              <p className='text-black font-bold text-md md:text-2xl'>2010</p>
            </div>
            <p className='text-gray-300 text-sm md:text-base w-2/2 md:w-2/3 lg:w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, molestiae! Asperiores, veritatis explicabo placeat sit provident voluptate rerum tempore, commodi dicta atque nostrum excepturi, quod est rem distinctio nam quo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia aspernatur eligendi illum velit, dolor culpa molestias officiis iusto eveniet ducimus deserunt in atque voluptatibus neque assumenda voluptatum obcaecati ipsam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas vero, ex dolorem ratione voluptate maxime iste sit cum blanditiis fugiat perferendis similique quisquam culpa eligendi, nemo voluptates numquam pariatur quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam alias dicta autem accusantium, nemo et rem quas asperiores placeat in esse, cupiditate tempora quaerat! Sequi fugiat ipsum beatae ipsam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
