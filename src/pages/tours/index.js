import React, { useEffect, useState } from "react";
import Travel from "../../../components/Travel/Travel";
import Tour from "../../../components/Tour/Tour";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import TourDestination from "../../../components/Tour/TourDestination";
import { Helmet } from "react-helmet-async";
import style from "./tour.module.css";
import Reveiw from "../../../components/Vissa/Review/Reveiw";
const TourPage = () => {
  return (
    <section>
      <Helmet>
        <title>Ghuronti || Tours </title>
      </Helmet>
      <Nav />
      <Tour></Tour>
      <div className={style.tour}>
        <TourDestination />
      </div>
      <BestPlace></BestPlace>
      <div className="mb-10">
        <Travel></Travel>
      </div>
      <Reveiw/>
      <Footer />
    </section>
  );
};

export default TourPage;
