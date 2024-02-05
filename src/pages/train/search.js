import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import TrainSearch from '../../../components/Buses/SearchBus/TrainSearch';
import dynamic from "next/dynamic";

const search = () => {
    return (
        <main>
            <Nav/>
              <TrainSearch/>
            <Footer/>
        </main>
    );
};

export default dynamic(() => Promise.resolve(search), { ssr: false });