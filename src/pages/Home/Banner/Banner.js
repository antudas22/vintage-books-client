import React from 'react';
import banner from '../../../media/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-8 relative'>
            <div className='my-banner'>
            <img src={banner} alt="" />
            </div>
            <div className='absolute top-1/3 ml-12 text-white flex items-end'>
                <div>
                <h1 className='text-6xl font-bold mb-4'>Here Is<br/> Our Library<br/> Of Vintage Books</h1>
                <p className='text-lg'>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
                </div>
                <div>
                    <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 ml-12'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;