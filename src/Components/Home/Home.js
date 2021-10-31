import React from 'react';
import Services from '../Allservice/Services';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';

import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
         
           <Banner></Banner>
           <Services></Services>
           <Body></Body>
        </div>
    );
};

export default Home;