import React from 'react';

const OfferSection = () => {
    return (
        <div>
            <div className='flex justify-around items-end py-20 bg-blue-200 rounded-3xl mt-10'>
                <h2 className='lg:text-6xl font-bold uppercase'>Get 30% Offer<br/> with 20 Books</h2>
                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0'>Get now</button>
            </div>
        </div>
    );
};

export default OfferSection;