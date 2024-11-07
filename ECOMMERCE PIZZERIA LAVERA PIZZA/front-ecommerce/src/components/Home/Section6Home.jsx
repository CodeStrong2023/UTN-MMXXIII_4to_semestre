import React from 'react'

const Section6Home = () => {
    return (
        <div className='h-full w-full bg-gradient-to-b from-black to-gray-500 flex items-center justify-center '>
            <section className='flex flex-col justify-center items-center '>
                <h1 className='text-white text-5xl pb-14'>
                    DINER WITH US
                </h1>
                <div className='text-flu-Primary-Yellow text-3xl pb-10 '>
                    <p> (255) 352-6258 </p>
                </div>
                <div className=' flex flex-col gap-5 w-72'>
                    <button className='bg-white text-black w-full text-center pt-2 pb-2'>
                        ordena online
                    </button>
                    <button className='bg-flu-Primary-Orange text-white w-full text-center pt-2 pb-2'>
                        contactanos
                    </button>
                </div>

            </section>

        </div>
    )
}

export default Section6Home