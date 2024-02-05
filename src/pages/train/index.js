import React from "react";
import Tour from "../../../components/Tour/Tour";
import Travel from "../../../components/Travel/Travel";
import TourDestination from "../../../components/Tour/TourDestination";
import Customer from "../../../components/Customer/Customer";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import TrainBanner from "../../../components/Train/TrainBanner";
import Reveiw from "../../../components/Vissa/Review/Reveiw";

const index = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || Train </title>
        </Helmet>
      <Nav />
      <TrainBanner/>
      <BestPlace></BestPlace>
      <Travel></Travel>
      <TourDestination></TourDestination>
      <Customer></Customer>
      <Reveiw/>
      <Footer />
    </section>
  );
};

export default index;
