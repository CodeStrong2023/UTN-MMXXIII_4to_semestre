import {datapizzeriaLavera} from '../../api/mocks/DataPizzeriaLavera';

export const ContactCard = () => {
  return (
    <div className='flex flex-col gap-10 justify-end'>
        <h1 className='text-flu-Primary-Orange text-4xl'>{datapizzeriaLavera.wsp}</h1>
        <div>
            <h2 className='text-xs font-bold'>Addres</h2>
            <p className='font-light'>{datapizzeriaLavera.address}, {datapizzeriaLavera.city}, {datapizzeriaLavera.province}</p>
        </div>
        <div>
            <h2 className='text-xs font-bold'>Hours</h2>
            <p className='font-light'>Daily {datapizzeriaLavera.hours}</p>
        </div>
    </div>
  )
}
