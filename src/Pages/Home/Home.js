import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import TopBanner from './TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            {/* <MySkills></MySkills>
            <Footer></Footer> */}
            <Footer></Footer>
          
        </div>
    );
};

export default Home;