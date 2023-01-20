import Image from 'next/image';
import React, { useState } from 'react';
import slidedata from '.././data/slidedata';
import SliderItem from './SliderItem';
const HeroSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = slidedata.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <div className='h-full mt-20'>
            {slidedata.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current &&
                            <SliderItem
                                key={slide.title}
                                img={slide.img}
                                title={slide.title}
                                description={slide.description}
                                cta={slide.cta}
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                            />}
                    </div>
                )
            })}
        </div>
    )
}

export default HeroSlider