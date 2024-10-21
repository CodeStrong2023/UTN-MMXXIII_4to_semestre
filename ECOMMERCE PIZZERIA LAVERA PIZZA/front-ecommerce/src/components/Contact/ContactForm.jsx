import { useForm } from "react-hook-form"
import { isEmail } from "validator"

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const customSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="h-1/3 w-1/4">
        <h1 className="text-6xl pb-16">CONTACT</h1>
        <form onSubmit={handleSubmit(customSubmit)} className="flex flex-wrap gap-3 flex-col">
            <div className="flex justify-around gap-7">
                <div className="border-b-2 w-full">
                    <input type="text" placeholder="Name"{...register('name',{
                        required:true
                    })} />
                </div>
                <div className="border-b-2 w-full">
                    <input type="email" placeholder="Email" {...register('email',{
                        required:true,
                        validate: isEmail
                    })} />
                </div>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="5" className="border-b-2 w-full" {...register('message',{
                    required:true,
                })}></textarea>
            </div>
            <div className="flex justify-end">
                <button className="h-[40px] w-[130px] bg-flu-Primary-Yellow text-2xl rounded-lg">Send</button>
            </div>
        </form>
    </div>
    
    )
}

export default ContactForm