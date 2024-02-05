import React from "react";
import Umra from "../../../components/Umra/Umra";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import Reveiw from "../../../components/Vissa/Review/Reveiw";
const HajjUmra = () => {
  return (
    <section>
      <Helmet>
            <title> Ghuronti || Hajj & Umrah </title>
        </Helmet>
      <Nav />
      <Umra></Umra>
      <Reveiw/>
      <Footer />
    </section>
  );
};


export default HajjUmra;
