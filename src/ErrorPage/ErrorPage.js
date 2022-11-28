import React from 'react';
import img from '../media/404 img.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div className='max-w-sm mx-auto mt-20'>
            <img src={img} alt="" />
        </div>
        <div>
            <h2 className='text-4xl font-semibold text-error text-center'>Something Went Wrong!!!</h2>
        </div>
        </div>
    );
};

export default ErrorPage;