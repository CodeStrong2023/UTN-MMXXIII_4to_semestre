import CutTomato from '/src/assets/images/cutTomatoS5.svg'
import smallPizza from '/src/assets/images/smallPizza.png'
import fondo from '../../assets/images/pizzeria_76.jpg'

export const Section5Home = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <img src={fondo} alt="" className='absolute  w-screen max-w-none h-full -z-20' />
            <section className='h-[900px] w-[700px] relative flex flex-col items-end justify-end'>
                <div className='h-3/4 w-3/5 bg-flu-Primary-Blue flex flex-col items-center justify-center gap-7 absolute top-0 left-0 -z-10'>
                    <h1 className=' w-1/2 text-4xl text-flu-Primary-Yellow transform rotate-[-14deg] text-start pb-4'> SINCE 1987</h1>
                    <p className='text-white text-sm text-start w-2/3 '>
                        Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Proin eget tortor
                        risus. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. Mauris blandit aliquet elit,
                        eget tincidunt nibh pulvinar a. Vivamus suscipit tortor
                        eget felis porttitor volutpat. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices
                    </p>
                    <p  className='text-white text-start w-2/3'>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Curabitur aliquet quam id dui posuere
                        blandit. Nulla quis lorem ut libero malesuada feugiat.
                        Donec sollicitudin molestie malesuada. Curabitur
                        aliquet quam id dui po
                    </p>
                </div>
                <div className='h-1/4 w-2/5 flex items-end justify-start relative mr-'>
                    <img src={CutTomato} alt="Cut tomato" className='h-full w-full absolute -z-10'/>
                    <button className='text-black bg-white pl-12 pt-10 pr-11 pb-4'>
                        Learn More
                    </button>
                </div>
                <div className='h-64 w-2/3 flex'>
                    <img src={smallPizza} alt="small pizza" className='h-full w-2/5'/>
                    <div className='w-4/5 flex items-center justify-center bg-flu-Primary-Yellow text-flu-Primary-Orange'>
                        <p className='w-2/3 text-start'>
                            “ Donec rutrum congue leo eget
                            malesuada. Curabitur aliquet quam id
                            dui posuere blandit. Donec rutrum con”
                        </p>
                    </div>
                </div>

            </section>

        </div>
    )
}