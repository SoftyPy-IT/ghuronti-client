import React from "react";
import Nav from "../../../components/NavBarr/Nav";
import Banner from "../../../components/Banner/Banner";
import TourDestination from "../../../components/Tour/TourDestination";
import DisCount from "../../../components/DisCount/DisCount";
import Travel from "../../../components/Travel/Travel";
import Mission from "../../../components/Mission/Mission";
import Customer from "../../../components/Customer/Customer";
import Footer from "../../../components/Footer/Footer";
import Reveiw from "../../../components/Vissa/Review/Reveiw";

const index = () => {
  return (
    <div>
      <Nav />
      <Banner></Banner>
      <TourDestination></TourDestination>
      <DisCount />
      <Travel></Travel>
      <Mission />
      <Reveiw/>
      <Customer></Customer>
      <Footer />
    </div>
  );
};

export default index;
