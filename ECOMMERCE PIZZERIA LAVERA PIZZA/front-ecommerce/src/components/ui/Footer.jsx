import React from 'react'
import { datapizzeriaLavera } from '../../api/mocks/DataPizzeriaLavera'

const Footer = () => {
    return (
        <div className=''>
            <div className="w-full h-1/5 bg-flu-Primary-Blue flex justify-center items-center gap-20">
                <div className='h-1/3 w-48'>
                    <h1 className='text-white'>CONTACT</h1>
                    <h2 className='text-flu-Primary-Orange'>{datapizzeriaLavera.wsp}</h2>
                </div>
                <div className='h-1/3 w-48'>
                    <h1 className='text-white'>OPENING HOURS</h1>
                    <h2 className=''>{datapizzeriaLavera.hours}</h2>
                </div>

            </div>
        </div>
    )
}

export default Footer