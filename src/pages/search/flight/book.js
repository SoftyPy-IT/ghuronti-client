import React from "react";
import Footer from "../../../../components/Footer/Footer";
import FlightBook from "../../../../components/SearhPage/FlightBook/FlightBook";
import dynamic from "next/dynamic";

import Nav from "../../../../components/NavBarr/Nav";
const book = () => {
  return (
    <section>
      <Nav />
      <FlightBook />
      <Footer />
    </section>
  );
};


export default dynamic(() => Promise.resolve(book), { ssr: false });
