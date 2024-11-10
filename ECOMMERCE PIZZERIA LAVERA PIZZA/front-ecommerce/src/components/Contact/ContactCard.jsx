import {datapizzeriaLavera} from '../../api/mocks/DataPizzeriaLavera';

export const ContactCard = () => {
  return (
    <div className='flex flex-col gap-10 justify-center p-6 bg-white bg-opacity-80 rounded-xl shadow-lg hover:shadow-xl transition-all'>
      <h1 className='text-flu-Primary-Orange text-4xl font-semibold'>{datapizzeriaLavera.wsp}</h1>
      <div>
        <h2 className='text-xs font-bold text-gray-700'>Dirección</h2>
        <p className='font-light text-gray-600'>{datapizzeriaLavera.address}, {datapizzeriaLavera.city}, {datapizzeriaLavera.province}</p>
      </div>
      <div>
        <h2 className='text-xs font-bold text-gray-700'>Horarios</h2>
        <p className='font-light text-gray-600'>Diarios {datapizzeriaLavera.hours}</p>
      </div>
    </div>
  )
}