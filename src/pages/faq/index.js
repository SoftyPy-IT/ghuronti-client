import React from "react";
import Faq from "../../../components/Faq/Faq";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";

const index = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || FAQ </title>
        </Helmet>
      <Nav />
      <Faq></Faq>
      <Footer />
    </section>
  );
};

export default index;
