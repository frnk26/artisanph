// import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const SliderItem = ({ img, title, description, cta, nextSlide, prevSlide }) => {

    return (
        <div className='grid grid-cols-3'>
            <img className='h-[70vh] w-full object-fill col-span-3 col-start-1 col-end-4 row-start-1 row-end-4' src={img} alt="" />
            <div className="button col-start-3 text-md row-start-3 font-bold text-wht justify-self-end">
                <button className=' bg-primary p-7' onClick={prevSlide}>
                    <AiOutlineLeft />
                </button>
                <button className='bg-primary p-7' onClick={nextSlide}>
                    <AiOutlineRight />
                </button>
            </div>
            <div className='col-span-3 text-skin-base p-[3.2rem]'>
                <div>
                    <h3 className='text-xl font-cinzel text-primary mb-7'>{title}</h3>
                    <p className='font-nunito font-semibold text-base leading-8 text-justify'>{description}</p>
                    <button className='text-wht text-base font-semibold mt-7 bg-primary rounded-md py-6 px-14 focus:scale-95 ease-in-out transition-all '>{cta}</button>
                </div>
            </div>
        </div>
    )
}

export default SliderItem