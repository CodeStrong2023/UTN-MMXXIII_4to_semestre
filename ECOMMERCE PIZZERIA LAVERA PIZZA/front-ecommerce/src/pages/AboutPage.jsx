import React from 'react';
import fondo from "../assets/images/pizzeria_76.jpg";
import video from "../assets/images/pizzeria_75.jpg";

export const AboutPage = () => {
  return (
    <>
      {/* Contenedor principal */}
      <div className='relative flex flex-col items-center text-white'>
        <img src={fondo} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
        
        {/* Título "Sobre Nosotros" */}
        <h1 className='mt-16 sm:mt-24 lg:mt-32 w-2/3 sm:w-3/4 md:w-2/3 text-center italic font-thin text-4xl sm:text-6xl md:text-7xl text-white'>
          Sobre Nosotros
        </h1>

        {/* Sección de la imagen y el texto */}
        <div className='relative flex flex-col items-center bg-gradient-to-r from-gray-800 to-gray-700 bg-opacity-80 rounded-lg shadow-lg p-8 w-[90%] sm:w-[80%] lg:w-[70%] my-12'>

          <div className="w-full mb-6">
            <img src={video} alt="Preparación de pizza" className="rounded-lg w-full h-64 sm:h-80 md:h-96 object-cover shadow-md" />
          </div>

          {/* Texto "Nuestra Historia" */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-yellow-300">
            Nuestra Historia
          </h2>

          {/* Contenedor con el año y la descripción */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full text-center md:text-left">

            {/* Año */}
            <div className='flex flex-col items-center bg-yellow-300 text-black p-4 rounded-md shadow-md mb-4 md:mb-0 md:mr-6 w-full md:w-1/4 lg:w-1/5'>
              <p className='italic text-sm'>Desde</p>
              <p className='font-bold text-2xl'>2010</p>
            </div>

            {/* Descripción */}
            <p className='text-gray-300 text-sm md:text-base leading-relaxed md:leading-loose w-full md:w-3/4 lg:w-4/5'>
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
