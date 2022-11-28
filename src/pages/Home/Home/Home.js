import React from 'react';
import Advertise from '../../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import OfferSection from '../OfferSection/OfferSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <OfferSection />
            <CategorySection />
            <Advertise />
        </div>
    );
};

export default Home;