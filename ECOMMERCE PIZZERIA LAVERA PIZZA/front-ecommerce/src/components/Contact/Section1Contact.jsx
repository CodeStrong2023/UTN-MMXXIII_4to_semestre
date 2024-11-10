import ContactForm from './ContactForm'
import {ContactCard} from './ContactCard'
import MapComponent from '../ui/MapComponent'
import fondo from '../../assets/images/pizzeria_76.jpg'


const Section1Contact = () => {
    return (
      <div className='h-screen w-full text-white flex flex-col items-center justify-center gap-20 relative'>
        <img src={fondo} alt="Pizzeria Background" className='absolute w-full h-full object-cover -z-10' />
        <div className='flex w-2/3 sm:w-4/5 justify-between bg-white bg-opacity-90 rounded-xl shadow-lg p-8'>
          <ContactForm />
          <ContactCard />
        </div>
      </div>
    )
  }

export default Section1Contact