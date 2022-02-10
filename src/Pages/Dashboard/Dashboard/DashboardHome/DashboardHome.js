import React from 'react';
import Navigation from '../../../Home/Navigation/Navigation';
import TopBanner from './../../../Home/TopBanner/TopBanner';
import Footer from './../../../Home/Footer/Footer';

const DashboardHome = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Footer></Footer>
        </div>
    );
};

export default DashboardHome;