import React from "react";
import Footer from "../../../components/Footer/Footer";
import HotelSearch from "../../../components/SearhPage/HotelSearch";
import dynamic from "next/dynamic";
import Nav from "../../../components/NavBarr/Nav";

const SearcPage = () => {
  return (
    <section>
      <Nav></Nav>
      <HotelSearch />
      
      <Footer />
    </section>
  );
};

export default dynamic(() => Promise.resolve(SearcPage), { ssr: false });

