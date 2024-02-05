import React from "react";
import TermAndCondition from "../../../components/TermAndCondition/TermAndCondition";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";

const index = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || Term & Condition </title>
        </Helmet>
      <Nav />
      <TermAndCondition></TermAndCondition>
      <Footer />
    </section>
  );
};

export default index;
