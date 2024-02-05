import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import ToursReserve from '../../../components/Tour/ToursReserve/ToursReserve';
import dynamic from "next/dynamic";
const toursReserve = () => {
    
    return (
        <div>
            <Nav/>
            <ToursReserve/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(toursReserve), { ssr: false });