import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import Checkout from '../../../components/Tour/Checkout/Checkout';

const checkout = () => {
    return (
        <div>
            <Nav/>
            <Checkout/>
            <Footer/>
        </div>
    );
};

export default checkout;