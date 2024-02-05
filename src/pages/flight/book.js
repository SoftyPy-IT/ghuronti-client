import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import FlightBook from '../../../components/UserDashBoard/FlightBook/FlightBook';

const book = () => {
    return (
        <div>
          <Nav/>
          <FlightBook/>
          <Footer/>
        </div>
    );
};

export default book;