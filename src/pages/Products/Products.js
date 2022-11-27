import React, { useState } from 'react';
import BookNowModal from '../BookNowModal/BookNowModal';
import Product from './Product';
import {useQuery} from '@tanstack/react-query';

const Products = () => {
    const [booking, setBooking] = useState(null);

    const {data:products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data
        }
    })
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
                setBooking={setBooking}
                />
            }
        </div>
    );
};

export default Products;