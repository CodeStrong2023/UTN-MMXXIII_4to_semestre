import React from 'react'

const CardMenu = ({product}) => {
    return (
        <div className='h-32 w-32 2xl:h-48 2xl:w-40 flex flex-col mb-6 2xl:mb-0 '>
          <h1 className='h-11 w-full bg-flu-Primary-Blue text-white text-center'>
            {product.name}
          </h1>
          <img src={product.image} alt="No Found image" className='h-40 w-full object-cover' />
        </div>
      );
}

export default CardMenu