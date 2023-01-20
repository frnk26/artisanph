import React from 'react';
// URQL
import { PRODUCT_QUERY } from '@/lib/query';
import { useQuery } from 'urql';

import ProductItem from './ProductItem';

const ProductList = () => {
    const [results] = useQuery({ query: PRODUCT_QUERY })
    const { data, fetching, error } = results;

    if (fetching) return <p> loading</p>;
    if (error) return <p> error{error.message}</p>;
    // data produt
    const products = data.products.data;

    return (
        // product grid
        <div className='product-list'>
            {products.map((product) => (
                <ProductItem key={product.attributes.slug} product={product} />
            ))}
        </div>
    )
}

export default ProductList