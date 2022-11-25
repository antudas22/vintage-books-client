import React, { useEffect, useState } from 'react';
import BookNowModal from '../BookNowModal/BookNowModal';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [booking, setBooking] = useState(null);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold my-10 text-center'>Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        setBooking={setBooking}
                    ></Product>)
                }
            </div>
            {
                booking &&
                <BookNowModal
                booking={booking}
                />
            }
        </div>
    );
};

export default Products;