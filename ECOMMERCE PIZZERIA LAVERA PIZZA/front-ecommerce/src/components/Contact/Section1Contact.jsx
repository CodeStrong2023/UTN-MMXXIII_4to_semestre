import ContactForm from './ContactForm'
import {ContactCard} from './ContactCard'
import MapComponent from '../ui/MapComponent'
import fondo from '../../assets/images/bg-contact-form.jpg'


const Section1Contact = () => {
    return (
        <div className='h-screen w-full bg-white flex flex-col items-center justify-center gap-20'>
            <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-10' />
            <div className='flex  w-2/5  justify-between'>
               <ContactForm />
                <ContactCard />
            </div>
            {/* <MapComponent /> */}
        </div>
    )
}

export default Section1Contact