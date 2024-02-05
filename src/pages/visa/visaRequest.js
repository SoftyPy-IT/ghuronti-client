import React from 'react';
import VisaRequest from '../../../components/Vissa/VisaRequest/VisaRequest';
import dynamic from "next/dynamic";
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
const visaRequest = () => {
    return (
        <div>
            <Nav/>
            <VisaRequest/>
            <Footer/>
        </div>
    );
};
export default dynamic(() => Promise.resolve(visaRequest), { ssr: false });