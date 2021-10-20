import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';


const Home = () => {
    return (
        <div id="home" >
            <h1> this is our home page </h1>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;