import React from 'react';
import AllTours from '../AllTours/AllTours';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTours></AllTours>
            <Features></Features>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;