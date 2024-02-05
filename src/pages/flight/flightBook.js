import React from "react";
import dynamic from "next/dynamic"
import Nav from "../../../components/NavBarr/Nav";
import FlightBook from "../../../components/SearhPage/FlightBook/FlightBook";
import Footer from "../../../components/Footer/Footer";
const book = () => {
  return (
    <section>
      <Nav/>
      <FlightBook/>
      <Footer/>
      
    </section>
  );
};


export default dynamic(() => Promise.resolve(book), { ssr: false });
