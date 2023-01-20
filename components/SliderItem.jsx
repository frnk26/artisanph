// import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const SliderItem = ({ img, title, description, cta, nextSlide, prevSlide }) => {

    return (
        <div className='grid grid-cols-3 md:grid-cols-5'>
            <img className='h-[70vh] w-full object-fill col-span-3 col-start-1 col-end-4 row-start-1 row-end-4
            md:h-[90vh]' src={img} alt="" />
            <div className="button col-start-3 text-md row-start-3 font-bold text-wht justify-self-end md:col-start-4 md:justify-self-start md:text-xl z-10">
                <button className=' bg-primary p-7 focus:scale-95 ease-in-out transition-all  ' onClick={prevSlide}>
                    <AiOutlineLeft />
                </button>
                <button className='bg-primary p-7 focus:scale-75 ease-in-out transition-all' onClick={nextSlide}>
                    <AiOutlineRight />
                </button>
            </div>
            {/* description */}
            <div className='col-start-1 col-end-4 text-skin-base p-[3.2rem] md:px-24 md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-4 md:place-self-center'>
                <div>
                    <h3 className='text-xl font-cinzel text-primary mb-7 md:mb-14 md:text-2xl lg:text-3xl'>{title}</h3>
                    <p className='font-nunito font-semibold text-base leading-8 text-justify indent-8 md:leading-10'>{description}</p>
                    <button className='text-wht text-base font-semibold mt-7 bg-primary rounded-md py-6 px-14 focus:scale-95 ease-in-out transition-all '>{cta}</button>
                </div>
            </div>
        </div>
    )
}

export default SliderItem