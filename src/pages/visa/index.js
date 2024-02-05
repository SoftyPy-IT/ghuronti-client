import React from "react";
import Countries from "../../../components/Countries/Countries";
import Passion from "../../../components/Passion/Passion";
import Travel from "../../../components/Travel/Travel";
import Vissa from "../../../components/Vissa/Visa";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import Reveiw from "../../../components/Vissa/Review/Reveiw";

const index = () => {

  return (
    <section>
      <Helmet>
            <title>Ghuronti || Visa </title>
        </Helmet>
      <Nav />
      <Vissa></Vissa>
      <Countries></Countries>
      <Passion></Passion>
      <div className="my-10">
        <Travel></Travel>
        <Reveiw></Reveiw>
      </div>
      <Footer></Footer>
      
    </section>
  );
};

export default index;
