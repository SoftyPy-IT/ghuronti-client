import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import ToursSearch from '../../../components/Tour/ToursSearch/ToursSearch';


const Search = () => {
    return (
        <section>
            <Nav/>
            <ToursSearch/>
            <Footer/>
        </section>
    );
};

export default Search;