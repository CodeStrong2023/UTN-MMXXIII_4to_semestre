import React from 'react'

const CardMenu = ({product}) => {
    return (
        <div className='h-48 w-40 flex flex-col'>
          <h1 className='h-11 w-full bg-flu-Primary-Blue text-white text-center'>
            {product.name}
          </h1>
          <img src={product.image} alt="No Found image" className='h-40 w-full object-cover' />
        </div>
      );
}

export default CardMenu