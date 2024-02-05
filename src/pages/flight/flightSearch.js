import React from "react";
import dynamic from "next/dynamic";
import Nav from "../../../components/NavBarr/Nav";
import Footer from "../../../components/Footer/Footer";
import FlightSearch from "../../../components/SearhPage/FlightSearch/FlightSearch";

const SearcPage = () => {
  return (
    <section>
      <Nav/>
        <FlightSearch/>
        <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(SearcPage), { ssr: false });
