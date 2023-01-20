import React from 'react';
import ProductList from './ProductList';

const ProductItem = ({ product }) => {
    // deconstruct the product prop
    const { title, price } = product.attributes;
    const image = product.attributes.image.data.attributes.formats;
    return (
        <div className='text-wht bg-primary font-nunito text-base rounded-md relative flex flex-col p-7 w-full'>
            <div className='overflow-hidden mb-14' >
                <img className='w-full aspect-square object-fill hover:scale-125 ease-in-out transition-all' src={image.small.url} alt="" />
            </div>
            <div className='flex justify-between text-md md:text-base '>
                <p className=''>{title}</p>
                <h3 className=''>₱{price}</h3>
            </div>
            <div className='flex items-center justify-between mt-7 md:mt-14'>
                <div className="flex justify-evenly w-[50%]">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>

                </div>
                <button className='bg-secondary py-3 px-7 rounded-md md:text-base'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductItem