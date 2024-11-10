import fondo from '../../assets/images/pizzeria_77.jpg'

const Section2Contact = () => {
    return (
      <div className="h-[600px] w-full flex flex-col items-center justify-center gap-24 relative">
        <img src={fondo} alt="Dining Area" className="absolute w-full h-full object-cover opacity-90 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent -z-10"></div>
        <h1 className="w-2/3 text-6xl text-center font-light text-white">Cena con nosotros</h1>
        <div className="w-1/3 flex flex-col gap-4">
          <h2 className="text-4xl text-center text-flu-Primary-Yellow font-semibold m-2">(260)-4811711</h2>
          <button className="w-full py-3 bg-white text-black rounded-lg shadow-md hover:shadow-lg transition-all">
            Ordena Ahora
          </button>
          <button className="w-full py-3 bg-flu-Primary-Orange text-white rounded-lg shadow-md hover:shadow-lg transition-all">
            Escribinos
          </button>
        </div>
      </div>
    )
  }

export default Section2Contact