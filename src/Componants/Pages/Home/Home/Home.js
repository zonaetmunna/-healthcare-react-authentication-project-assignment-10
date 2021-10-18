import React from 'react';
import Banner from '../Banner/Banner';
import MidBanner from '../MidBanner/MidBanner';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Services></Services>
               <Teams></Teams>
               <MidBanner></MidBanner>
          </div>
     );
};

export default Home;