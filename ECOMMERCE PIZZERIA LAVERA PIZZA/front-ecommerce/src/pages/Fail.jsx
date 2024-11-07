import React from 'react'

export const Fail = () => {
  return (
    <div className='w-full h-full bg-black flex items-center justify-center'>
      <div className='h-80 w-80 rounded-lg flex items-center justify-center' >
        <h1 className='text-5xl font-semibold text-red-800'> 
          su compra no fue aceptada intente nuevamente con otro medio de pago
        </h1>
      </div>
    </div>
  )
}
