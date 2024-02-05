import React, { useEffect, useState } from "react";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import TourDestination from "../../../components/Tour/TourDestination";
import BestPlace from "../../../components/BestPlace/BestPlace";
import BusBanner from "../../../components/BusBanner/BusBanner";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import Reveiw from "../../../components/Vissa/Review/Reveiw";

const Busses = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || Busses </title>
        </Helmet>
      <Nav />
      <BusBanner></BusBanner>
      <BestPlace />
      <Travel></Travel>
      <TourDestination></TourDestination>
      <Customer></Customer>
      <Reveiw/>
      <Footer />
    </section>
  );
};

export default Busses;
