import React from 'react';
import Banner from './Banner/Banner';
import Choose from './Choose/Choose';
import GoogleMap from './GoogleMap/GoogleMap';
import Services from './Services/Services';
import Travellers from './Travellers/Travellers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Travellers></Travellers>
            <Choose></Choose>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;