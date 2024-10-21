import { datapizzeriaLavera } from "../../api/mocks/DataPizzeriaLavera"
import fondo from '../../assets/images/pizzeria_77.jpg'

const Section2Contact = () => {
    return (
        <div className="h-[600px] w-full flex flex-col items-center justify-center gap-24 relative">
            <img src={fondo} alt="" className="absolute w-full max-w-none object-cover h-full -z-10 opacity-95" />

            {/* Gradiente de negro a transparente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent -z-10"></div>

            <h1 className="w-2/5 text-6xl text-center font-light text-white">DINE WITH US</h1>

            <div className="w-1/3 flex flex-col gap-4">
                <h2 className="text-4xl text-center text-flu-Primary-Yellow font-semibold">{datapizzeriaLavera.wsp}</h2>
                <button className="w-full pb-3 pt-3 bg-white text-black">Order Now</button>
                <button className="w-full pb-3 pt-3 bg-flu-Primary-Orange text-white">Book a Table</button>
            </div>
        </div>



    )
}

export default Section2Contact