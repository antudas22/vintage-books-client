import React from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import OfferSection from '../OfferSection/OfferSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <OfferSection />
            <CategorySection />
        </div>
    );
};

export default Home;