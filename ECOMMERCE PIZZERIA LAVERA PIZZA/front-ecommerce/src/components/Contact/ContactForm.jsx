import { useForm } from "react-hook-form"
import { isEmail } from "validator"

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
  
    const customSubmit = (data) => {
      console.log(data)
    }
  
    return (
      <div className="h-auto w-full max-w-md p-8 bg-white bg-opacity-80 rounded-xl shadow-xl">
        <h1 className="text-6xl pb-16 text-center font-semibold text-gray-800">CONTACTO</h1>
        <form onSubmit={handleSubmit(customSubmit)} className="flex flex-wrap gap-6 flex-col">
          <div className="flex flex-col gap-4">
            <div className="border-b-2 w-full p-2">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-flu-Primary-Orange"
                {...register('name', { required: true })}
              />
            </div>
            <div className="border-b-2 w-full p-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-flu-Primary-Orange"
                {...register('email', { required: true, validate: isEmail })}
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Mensaje"
              cols="30"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-flu-Primary-Orange"
              {...register('message', { required: true })}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="w-40 py-2 bg-flu-Primary-Yellow text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    )
  }

export default ContactForm