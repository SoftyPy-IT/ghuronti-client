import React from "react";
import Nav from "../../../components/NavBarr/Nav";
import Footer from "../../../components/Footer/Footer";
import dynamic from "next/dynamic";
import TourPackageBook from "../../../components/Tour/ToursReserve/TourPackageBook";
const BookTourPakcage = () => {
  return (
    <div>
      <Nav />
     <TourPackageBook/>
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(BookTourPakcage), { ssr: false });
